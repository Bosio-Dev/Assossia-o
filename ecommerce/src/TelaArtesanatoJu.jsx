import "./TelaArtesanatoJu.css";

export default function TelaArtesanatoJu({ onVoltar, onClick }) {
  return (
    <main className="tela-artesanato">
      <div className="topo-artesanato">
        <button className="botao-voltar" onClick={onVoltar}>←</button>
        <h3>ARTESANATO DA JU</h3>
        <span className="coracao-topo">♡</span>
      </div>

      <div className="conteudo-artesanato">
        {/* Banner de Desconto */}
        <div className="banner-desconto-verde">
          <div>
            <p className="texto-desconto">Ganhe 5% de desconto</p>
            <button className="btn-comprar-verde">Comprar agora</button>
          </div>
          <div className="icone-banner">🎨</div>
        </div>

        <div className="barra-pesquisa-prod">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="filtro-categorias-verde">
          <button className="pill-verde ativo">👜 Bolsas</button>
          <button className="pill-verde">🔑 Portas Chaves</button>
          <button className="pill-verde">📿 Colares</button>
        </div>

        <div className="detalhes-loja-texto">
          <h2>ARTESANATO DA JU</h2>
          <span className="nota">⭐ 4.8</span>
          <p className="sub-produtos">Produtos.</p>
          <p className="descricao-loja-verde">
            Descubra a magia de peças únicas feitas à mão. Cada item tem uma história, trazida por gerações.
          </p>
        </div>

        <p className="subtitulo-secao">Mais vendidos</p>

        {/* Mais vendidos */}
        <div className="card-horizontal">
          <div className="foto-mini pulseira-foto"></div>
          <div className="info-mini">
            <h5>Pulseiras</h5>
            <p>R$ 18,00</p>
          </div>
          <span className="badge-rating">⭐ 4.9</span>
        </div>
      </div>

      <button className="botao-conferir-verde" onClick={onClick}>
        Conferir Produtos
      </button>
    </main>
  );
}