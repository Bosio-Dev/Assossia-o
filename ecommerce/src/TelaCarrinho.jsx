import "./TelaCarrinho.css";

export default function TelaCarrinho({ onVoltar }) {
  return (
    <main className="tela-carrinho">
      <div className="topo-carrinho">
        <div className="info-loja-mini">
          <span className="icone-casa">🏠</span>
          <div>
            <strong>Aqui no bairro</strong>
            <p>Pedido da Padaria do Carlos</p>
          </div>
        </div>
        <div className="abas-topo">
          <span>Início</span>
          <span>Produtos</span>
          <span className="ativo">Carrinho</span>
          <span>WhatsApp</span>
        </div>
      </div>

      <button className="link-voltar" onClick={onVoltar}>
        ← Voltar à escolha das lojas
      </button>

      <div className="corpo-carrinho">
        <h2>Seu carrinho</h2>
        <h3>Padaria do Carlos</h3>
        <p className="aviso-carrinho">
          Confira os itens e combine o pedido com Carlos pelo WhatsApp.
        </p>

        <div className="alerta-box">
          Este pedido é só da Padaria do Carlos. Para comprar em outra loja, faça um novo pedido.
        </div>

        <div className="resumo-card">
          <div className="linha-resumo">
            <span>Subtotal dos itens</span>
            <span>R$ 0,00</span>
          </div>
          <div className="linha-resumo">
            <span>Taxa de entrega</span>
            <span>A confirmar</span>
          </div>
          <hr />
          <div className="linha-resumo total">
            <span>Total dos itens</span>
            <span className="valor-total">R$ 0,00</span>
          </div>
          <p className="nota-taxa">
            Valor sem a taxa de entrega. O total final será confirmado na conversa.
          </p>
        </div>

        <button className="botao-whatsapp">
          Finalizar pelo WhatsApp
        </button>
      </div>
    </main>
  );
}