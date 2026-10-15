import "./TelaProdutosPadaria.css";

export default function TelaProdutosPadaria({ onVoltar, onClick }) {
  return (
    <main className="tela-produtos">
      <div className="topo-produtos">
        <button className="botao-voltar" onClick={onVoltar}>←</button>
        <h3>PADARIA DO CARLOS</h3>
        <span className="coracao-topo">♡</span>
      </div>

      <div className="conteudo-produtos">
        {/* Banner de Desconto */}
        <div className="banner-desconto">
          <div>
            <p className="texto-desconto">Ganhe 5% de desconto</p>
            <button className="btn-comprar-agora">Comprar agora</button>
          </div>
          <div className="icone-banner">🥐</div>
        </div>

        <div className="barra-pesquisa-prod">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="filtro-categorias-prod">
          <button className="pill ativo">🥖 Pães</button>
          <button className="pill">🥐 Salgados</button>
          <button className="pill">🍩 Doces</button>
        </div>

        <p className="subtitulo-secao">Produtos.</p>

        {/* Grade de Produtos */}
        <div className="grid-produtos">
          <div className="card-produto">
            <div className="foto-prod pao-foto"></div>
            <h4>Pães</h4>
            <p className="preco">R$ 5 / KG</p>
          </div>

          <div className="card-produto">
            <div className="foto-prod salgado-foto"></div>
            <h4>Salgados</h4>
            <p className="preco">R$ 35 / KG</p>
          </div>
        </div>

        <div className="secao-mais-vendidos">
          <h4>Mais vendidos</h4>
          <div className="card-horizontal">
            <div className="foto-mini bolo-foto"></div>
            <div className="info-mini">
              <h5>Bolo de Chocolate</h5>
              <p>R$ 18,00</p>
            </div>
            <span className="badge-rating">⭐ 4.9</span>
          </div>
        </div>
      </div>

      <button className="botao-conferir-carrinho" onClick={onClick}>
        Conferir Carrinho
      </button>
    </main>
  );
}