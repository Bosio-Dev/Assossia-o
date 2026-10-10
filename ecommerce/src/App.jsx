
import { useState } from "react";
import TelaInicial from "./TelaInicial";
import TelaLoja from "./TelaLoja";


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
        <TelaLoja
          onIniciar={() => setPagina("lojas")}
        /> 

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