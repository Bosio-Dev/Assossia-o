import "./TelaPadariaCarlos.css";

export default function TelaPadariaCarlos({ onVoltar, onClick }) {
  return (
    <main className="tela-padaria">
      <div className="topo-detalhe">
        <button className="botao-voltar" onClick={onVoltar}>←</button>
        <h3>Padaria e Confeitaria</h3>
      </div>

      <div className="banner-loja">
        {/* Espaço para a imagem de capa da padaria */}
      </div>

      <div className="conteudo-detalhe">
        <div className="titulo-avaliacao">
          <h2>PADARIA DO CARLOS</h2>
          <span className="nota">⭐ 4.0</span>
        </div>
        
        <p className="sub-produtos">Produtos.</p>

        <div className="tags-produtos">
          <span className="tag">🥣 Bolos</span>
          <span className="tag">🥖 Pães</span>
          <span className="tag">🍪 Biscoito</span>
        </div>

        <section className="secao-descricao">
          <h4>Descrição</h4>
          <p>
            Uma padaria acolhedora, com uma grande variedade de pães fresquinhos, 
            bolos, salgados e doces preparados diariamente. Oferece produtos de qualidade, 
            atendimento atencioso e um ambiente agradável, ideal para quem deseja tomar um café, 
            fazer um lanche ou comprar produtos para o dia a dia.
          </p>
        </section>
      </div>

      <button className="botao-conferir" onClick={onClick}>
        Conferir Produtos
      </button>
    </main>
  );
}