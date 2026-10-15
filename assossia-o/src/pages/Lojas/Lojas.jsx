import "./style.css"; // Importa o CSS específico desta tela
import { supabase } from "../../services/supabaseClient.js"; // Adicionado o .js no final
import { useEffect, useState } from "react"; // Removido o "use" que quebrava o código

function Lojas() {
  const [listaLojas, setListaLojas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarLojasDoBanco() {
      try {
        const { data, error } = await supabase
          .from("lojas")
          .select("*");

        if (error) {
          throw error;
        }

        if (data) {
          setListaLojas(data);
        }
          
      } catch (error) {
        console.error('Erro ao puxar dados do banco', error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarLojasDoBanco();
  }, []);

  return (
    <div className='container-lojas'> {/* Ajustado para o plural */}
      {/* Cabeçalho */}
      <header className='header-lojas'> {/* Ajustado para o plural */}
        <h1 className='titulo-lojas'>
          ASSOCIAÇÃO <br /> DE <br /> MORADORES
        </h1>
      </header>

      {/* Barra de Pesquisa */}
      <div className='busca-container'>
        <span className='icone-busca'>🔍</span>
        <input type="text" placeholder="Pesquisar..." className='input-busca'/>
      </div>

      {/* Área Isolada com Rolagem Vertical */}
      <section className='area-rolagem-superior'>
        <div className='categorias-container'>
          <button className='tag-categoria'>🥖 Padaria</button>
          <button className='tag-categoria'>🛠️ Utensilios</button>
          <button className='tag-categoria'>🎨 Artesa.</button>
          <button className='tag-categoria'>Outros</button>
        </div>
      </section>

      {/* Lista da loja trazendo os dados de cada uma do supabase */}
      <div className='lista-lojas'>
        {carregando ? (
          <p style={{ color: "#555", fontSize: "14px" }}>Carregando Lojas...</p>
        ) : (
          listaLojas.map((loja) => (
            <div key={loja.id} className='card-loja' onClick={() => (window.location.href = `/loja/${loja.id}`)}> 
              <img src={loja.img} alt={loja.nome} className='img-loja'/>
              <div className="info-loja">
                <h2>{loja.nome}</h2>
                {loja.info && <p>{loja.info}</p>}
              </div>

              <button className='botao-favorito' onClick={(e) => e.stopPropagation()}>
                🤍
              </button>           
            </div>  
          ))
        )}
      </div>

      {/* Menu de navegação inferior fixo */}
      <nav className="menu-inferior">
        <button className='item-menu' onClick={() => (window.location.href = '/')}>
          🏠
        </button>
        <button className="item-menu ativo">🛍️</button>
        <button className="item-menu">👤</button>
      </nav>
    </div>
  );
}

export default Lojas;
  