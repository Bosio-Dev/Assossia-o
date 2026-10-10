// Importa o useState para guardar informações que mudam na tela.
import { useState } from "react";

// Importa os estilos da página.
import "./TelaLoja.css";

// Lista de lojas exibidas no catálogo.
const lojas = [
  {
    id: 1,
    nome: "Padaria do Carlos",
    descricao: "Entrega rápida",
    categoria: "Padaria",
    imagem: "/images/padaria.jpg",
    emoji: "🥐",
  },
  {
    id: 2,
    nome: "Armarinho da Rosa",
    descricao: "Agendamento",
    categoria: "Utensílios",
    imagem: "/images/armarinho.jpg",
    emoji: "🧵",
  },
  {
    id: 3,
    nome: "Artesanato da Juliana",
    descricao: "Por encomenda",
    categoria: "Artesanato",
    imagem: "/images/artesanato.jpg",
    emoji: "🎨",
  },
  {
    id: 4,
    nome: "Vôlei da Julia",
    descricao: "Artigos esportivos",
    categoria: "Esporte",
    imagem: "/images/volei.jpg",
    emoji: "🏐",
  },
];

// Categorias disponíveis.
const categorias = [
  { nome: "Padaria", emoji: "🥖" },
  { nome: "Utensílios", emoji: "🧵" },
  { nome: "Artesanato", emoji: "🎨" },
  { nome: "Esporte", emoji: "🏐" },
];

// Componente responsável pela página de lojas.
// Recebe as funções de estado do App.jsx.
export default function TelaLoja({
  setPagina,
  setLojaSelecionada,
}) {
  // Guarda o texto digitado na pesquisa.
  const [pesquisa, setPesquisa] = useState("");

  // Guarda a categoria que o usuário selecionou.
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Todas");

  // Guarda os identificadores das lojas favoritas.
  const [favoritas, setFavoritas] = useState([]);

  // Filtra as lojas conforme a pesquisa e a categoria.
  const lojasFiltradas = lojas.filter((loja) => {
    // Verifica se o nome contém o texto pesquisado.
    const correspondePesquisa = loja.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    // Verifica se a categoria corresponde ao filtro.
    const correspondeCategoria =
      categoriaSelecionada === "Todas" ||
      loja.categoria === categoriaSelecionada;

    // Exibe apenas lojas que correspondam aos dois critérios.
    return correspondePesquisa && correspondeCategoria;
  });

  // Adiciona ou remove uma loja dos favoritos.
  function alternarFavorita(id) {
    setFavoritas((listaAtual) => {
      // Se já for favorita, remove seu identificador.
      if (listaAtual.includes(id)) {
        return listaAtual.filter(
          (idFavorito) => idFavorito !== id
        );
      }

      // Caso contrário, adiciona o identificador à lista.
      return [...listaAtual, id];
    });
  }

  return (
    // Elemento principal da página.
    <main className="tela-loja">

      {/* Cabeçalho do projeto. */}
      <header className="cabecalho-loja">
        <h1>
          E-COMMERCE
          <br />
          LOCAL
        </h1>
      </header>

      {/* Campo de pesquisa das lojas. */}
      <div className="area-pesquisa">
        <span className="icone-pesquisa" aria-hidden="true">
          ⌕
        </span>

        <input
          type="search"
          placeholder="Pesquisar..."
          aria-label="Pesquisar lojas"
          value={pesquisa}

          // Atualiza a pesquisa quando o usuário digita.
          onChange={(evento) =>
            setPesquisa(evento.target.value)
          }
        />
      </div>

      {/* Navegação horizontal entre as categorias. */}
      <nav
        className="lista-categorias"
        aria-label="Categorias de lojas"
      >
        {/* Botão que mostra todas as lojas. */}
        <button
          type="button"
          className={
            categoriaSelecionada === "Todas"
              ? "categoria ativa"
              : "categoria"
          }
          onClick={() => setCategoriaSelecionada("Todas")}
        >
          Todas
        </button>

        {/* Cria um botão para cada categoria cadastrada. */}
        {categorias.map((categoria) => (
          <button
            type="button"
            key={categoria.nome}
            className={
              categoriaSelecionada === categoria.nome
                ? "categoria ativa"
                : "categoria"
            }
            onClick={() =>
              setCategoriaSelecionada(categoria.nome)
            }
          >
            <span aria-hidden="true">
              {categoria.emoji}
            </span>

            {categoria.nome}
          </button>
        ))}
      </nav>

      {/* Lista de cartões de lojas. */}
      <section className="lista-lojas">
        {lojasFiltradas.map((loja) => (
          <article className="cartao-loja" key={loja.id}>

            {/* Clicar neste botão abre a loja selecionada. */}
            <button
              type="button"
              className="conteudo-cartao-loja"
              aria-label={`Abrir ${loja.nome}`}
              onClick={() => {
                // Guarda todas as informações da loja selecionada.
                setLojaSelecionada(loja);

                // Solicita ao App.jsx que mostre a página de detalhes.
                setPagina("detalhes");
              }}
            >
              {/* Imagem ou emoji representativo da loja. */}
              <div className="imagem-loja">
                <span
                  className="emoji-reserva"
                  aria-hidden="true"
                >
                  {loja.emoji}
                </span>

                <img
                  src={loja.imagem}
                  alt=""
                  onError={(evento) => {
                    // Esconde a imagem caso o arquivo não exista.
                    evento.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Nome e descrição da loja. */}
              <div className="informacoes-loja">
                <h2>{loja.nome}</h2>
                <p>{loja.descricao}</p>
              </div>
            </button>

            {/* Botão para adicionar ou retirar dos favoritos. */}
            <button
              type="button"
              className="botao-favorito"
              aria-label={
                favoritas.includes(loja.id)
                  ? `Remover ${loja.nome} dos favoritos`
                  : `Adicionar ${loja.nome} aos favoritos`
              }
              aria-pressed={favoritas.includes(loja.id)}
              onClick={() => alternarFavorita(loja.id)}
            >
              {favoritas.includes(loja.id) ? "♥" : "♡"}
            </button>
          </article>
        ))}

        {/* Mensagem exibida quando a pesquisa não encontra lojas. */}
        {lojasFiltradas.length === 0 && (
          <p className="mensagem-vazia">
            Nenhuma loja encontrada.
          </p>
        )}
      </section>

      {/* Barra de navegação inferior. */}
      <nav
        className="barra-inferior"
        aria-label="Navegação principal"
      >
        {/* Volta à página inicial. */}
        <button
          type="button"
          className="item-navegacao selecionado"
          aria-label="Início"
          onClick={() => setPagina("inicio")}
        >
          <span aria-hidden="true">⌂</span>
        </button>

        {/* Abre a página de lojas novamente. */}
        <button
          type="button"
          className="item-navegacao"
          aria-label="Lojas"
          onClick={() => setPagina("lojas")}
        >
          <span aria-hidden="true">▤</span>
        </button>

        {/* Navegação provisória para o perfil. */}
        <button
          type="button"
          className="item-navegacao"
          aria-label="Perfil"
          onClick={() =>
            alert("A página de perfil será implementada depois.")
          }
        >
          <span aria-hidden="true">♙</span>
        </button>
      </nav>
    </main>
  );
}
