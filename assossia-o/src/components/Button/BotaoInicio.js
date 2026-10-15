export const configuracaoBotao = () => {
    return {
      className: "botao-iniciar",
      onClick: () => {
        // Navegação nativa do navegador. Vai para a URL /lojas de forma direta.
        window.location.href = "/lojas";
      },
      texto: "Iniciar →"
    };
  };
  