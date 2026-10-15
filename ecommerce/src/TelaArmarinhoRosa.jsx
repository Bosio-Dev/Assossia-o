import "./TelaArmarinhoRosa.css";

export default function TelaArmarinhoRosa({ onVoltar, onClick }) {
  return (
    <main className="tela-armarinho">
      <div className="topo-armarinho">
        <button className="botao-voltar" onClick={onVoltar}>←</button>
        <h3>ARMARINHO DA ROSA</h3>
        <span className="coracao-topo">♡</span>
      </div>

      <div className="conteudo-armarinho">
        {/* Banner de Desconto */}
        <div className="banner-desconto-azul">
          <div>
            <p className="texto-desconto">Ganhe 5% de desconto</p>
            <button className="btn-comprar-azul">Comprar agora</button>
          </div>
          <div className="icone-banner">🧵</div>
        </div>

        <div className="barra-pesquisa-prod">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="filtro-categorias-azul">
          <button className="pill-azul ativo">🧵 Cozin.</button>
          <button className="pill-azul">✂️ Costura</button>
          <button className="pill-azul">🎒 Escola</button>
        </div>

        <div className="detalhes-loja-texto">
          <h2>ARMARINHO DA ROSA</h2>
          <span className="nota">⭐ 4.8</span>
          <p className="sub-produtos">Produtos.</p>
          <p className="descricao-loja">
            Lojinha familiar com tudo pra casa e oficina. Próximo ao seu bairro, atendimento de confiança.
          </p>
        </div>

        <p className="subtitulo-secao">Mais vendidos</p>

        {/* Mais vendidos */}
        <div className="card-horizontal">
          <div className="foto-mini organizador-foto"></div>
          <div className="info-mini">
            <h5>Organizadores, Utensílios</h5>
            <p>R$ 28,00</p>
          </div>
          <span className="badge-rating">⭐ 4.9</span>
        </div>
      </div>

      <button className="botao-conferir-azul" onClick={onClick}>
        Conferir Produtos
      </button>
    </main>
  );
}