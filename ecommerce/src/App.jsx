import { useState } from "react";
import TelaInicial from "./TelaInicial";
import TelaLoja from "./TelaLoja";
import TelaPadariaCarlos from "./TelaPadariaCarlos";
import TelaProdutosPadaria from "./TelaProdutosPadaria";
import TelaCarrinho from "./TelaCarrinho";

export default function App() {
  const [pagina, setPagina] = useState("inicio");

  return (
    <>
      {pagina === "inicio" && (
        <TelaInicial
          onClick={() => setPagina("lojas")}
        />
      )}

      {pagina === "lojas" && (
        <TelaLoja
          onClickLoja={() => setPagina("padaria")}
          onClickHome={() => setPagina("inicio")}
          onClickCarrinho={() => setPagina("carrinho")}
        />
      )}

      {pagina === "padaria" && (
        <TelaPadariaCarlos
          onVoltar={() => setPagina("lojas")}
          onClick={() => setPagina("produtos-padaria")}
        />
      )}

      {pagina === "produtos-padaria" && (
        <TelaProdutosPadaria
          onVoltar={() => setPagina("padaria")}
          onClick={() => setPagina("carrinho")}
        />
      )}

      {pagina === "carrinho" && (
        <TelaCarrinho
          onVoltar={() => setPagina("produtos-padaria")}
          onClickHome={() => setPagina("lojas")}
        />
      )}
    </>
  );
}