import "./TelaLoja.css";

export default function TelaLoja({ onClickLoja, onClickHome, onClickCarrinho }) {
  return (
    <div className="container-app-mobile">
      <main className="tela-loja">
        <header className="header-loja">
          <h2>E-COMMERCE LOCAL</h2>
          <div className="busca-container">
            <input type="text" placeholder="Pesquisar..." />
          </div>
        </header>

        <div className="categorias-container">
          <button className="categoria-btn ativo">🥖 Padaria</button>
          <button className="categoria-btn">🥄 Utensílios</button>
          <button className="categoria-btn">🎨 Artesana.</button>
        </div>

        <div className="lista-cards">
          {/* Card Padaria do Carlos */}
          <div className="card-loja" onClick={onClickLoja}>
            <div className="card-imagem padaria-img"></div>
            <div className="card-info">
              <h3>Padaria do Carlos</h3>
              <p>Entrega rápida</p>
            </div>
            <span className="coracao">♡</span>
          </div>

          {/* Card Armarinho da Rosa */}
          <div className="card-loja">
            <div className="card-imagem armarinho-img"></div>
            <div className="card-info">
              <h3>Armarinho da Rosa</h3>
              <p>Agendamento</p>
            </div>
            <span className="coracao">♡</span>
          </div>

          {/* Card Artesanato da Ju */}
          <div className="card-loja">
            <div className="card-imagem artesanato-img"></div>
            <div className="card-info">
              <h3>Artesanato da Ju</h3>
              <p>Por encomenda</p>
            </div>
            <span className="coracao">♡</span>
          </div>

          {/* Card Volei da Julia */}
          <div className="card-loja">
            <div className="card-imagem volei-img"></div>
            <div className="card-info">
              <h3>Volei da Julia</h3>
              <p></p>
            </div>
            <span className="coracao">♡</span>
          </div>
        </div>
      </main>

      {/* Barra de Navegação Inferior */}
      <nav className="nav-inferior">
        <button className="nav-item ativo" onClick={onClickHome}>
          <span className="nav-icone">🏠</span>
        </button>
        <button className="nav-item" onClick={onClickCarrinho}>
          <span className="nav-icone">🛒</span>
        </button>
        <button className="nav-item">
          <span className="nav-icone">👤</span>
        </button>
      </nav>
    </div>
  );
}