
import "./TelaInicial.css";

export default function TelaInicial({ onClick }) {
  return (
    
    <main className="tela-inicial">

      <h1 className="titulo-inicial">
        E-COMMERCE
        <br />
        LOCAL
      </h1>

      <p className="descricao-inicial">
        Seu e-commerce de produtos locais.
      </p>

      <button
        className="botao-iniciar"
        onClick={onClick}
      >
        <span>Iniciar</span>
        <span className="seta-iniciar">→</span>
      </button>

    </main>
  );
}