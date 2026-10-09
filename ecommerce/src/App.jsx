
import { useState } from "react";
import TelaInicial from "./TelaInicial";


export default function App() {
  const [pagina, setPagina] = useState("inicio");

  return (
    <>
      {pagina === "inicio" && (
        <TelaInicial
          onIniciar={() => setPagina("lojas")}
        /> 
      )}

      {pagina === "lojas" && (
        <main style={{ padding: "40px", textAlign: "center" }}>
          <h1>Lista de lojas</h1>
          <p>A próxima página será construída aqui.</p>

          <button onClick={() => setPagina("inicio")}>
            Voltar
          </button>
          
          <button onClick={() => setPagina("padariacarlos")}>
            padaria do carlos
          </button>
        </main>
      )}



      {pagina === "padariacarlos" && (
        <main>
          <button onClick={() => setPagina("padariaprodutos")}>
            Conferir Produtos
          </button>
        </main>
      )}
    </>
  );
}
