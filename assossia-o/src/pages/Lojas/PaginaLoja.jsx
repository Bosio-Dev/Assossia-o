import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../services/supabaseClient.js";
import "./style.css";

function PaginaLoja() {
  const { id } = useParams(); // Pega o ID da loja clicada
  const [loja, setLoja] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarDadosDaLojaEProdutos() {
      try {
        // 1. Busca os dados da loja selecionada
        const { data: dadosLoja, error: erroLoja } = await supabase
          .from("lojas")
          .select("*")
          .eq("id", id)
          .single();

        if (erroLoja) throw erroLoja;
        setLoja(dadosLoja);

        // 2. Busca todos os produtos que pertencem a essa loja específica
        const { data: dadosProdutos, error: erroProdutos } = await supabase
          .from("produtos")
          .select("*")
          .eq("loja_id", id);

        if (erroProdutos) throw erroProdutos;
        setProdutos(dadosProdutos || []);

      } catch (error) {
        console.error("Erro ao carregar o banco de dados:", error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarDadosDaLojaEProdutos();
  }, [id]);

  if (carregando) {
    return <div className="carregando-tela">Carregando produtos...</div>;
  }

  if (!loja) {
    return <div className="carregando-tela">Loja não encontrada.</div>;
  }

  return (
    <div className="container-interna-loja">
      {/* Botão de Voltar e Nome da Loja */}
      <header className="header-interna">
        <button className="botao-voltar-seta" onClick={() => (window.location.href = "/lojas")}>
          ⬅️
        </button>
        <h1 className="titulo-loja-interna">{loja.nome.toUpperCase()}</h1>
      </header>

      {/* Banner de Desconto Fixado no Layout */}
      <div className="banner-desconto">
        <div className="texto-banner">
          <h2>Ganhe 5% de desconto</h2>
          <button className="btn-comprar-agora">Comprar agora</button>
        </div>
        <div className="img-banner-placeholder">🥐</div>
      </div>

      {/* Barra de Pesquisa de Produtos */}
      <div className="busca-produtos-container">
        <input type="text" placeholder="Pesquisar produto..." className="input-busca-produtos" />
      </div>

      {/* Categorias de Filtro Rápidas */}
      <section className="carrossel-categorias-produtos">
        <button className="tag-produto-filtro">🥖 Pães</button>
        <button className="tag-produto-filtro">🍕 Salgados</button>
        <button className="tag-produto-filtro">🍰 Doces</button>
      </section>

      {/* Grid Horizontal de Destaques/Produtos Principais */}
      <div className="grid-horizontal-produtos">
        {produtos.slice(0, 2).map((prod) => (
          <div key={prod.id} className="card-produto-quadrado">
            <img src={prod.img} alt={prod.nome} className="img-produto-quadrada" />
            <h3>{prod.nome}</h3>
            <p className="preco-produto">R$ {prod.preco} / {prod.unidade || "un"}</p>
            <button className="btn-add-lista">+</button>
          </div>
        ))}
      </div>

      {/* Seção Mais Vendidos (Lista Vertical) */}
      <h2 className="subtitulo-secao">Mais vendidos</h2>
      <div className="lista-mais-vendidos">
        {produtos.map((prod) => (
          <div key={prod.id} className="card-mais-vendido-linha">
            <img src={prod.img} alt={prod.nome} className="img-produto-linha" />
            <div className="info-produto-linha">
              <h3>{prod.nome}</h3>
              <p>R$ {prod.preco}</p>
            </div>
            <button className="btn-add-lista">+</button>
          </div>
        ))}
      </div>

      {/* Botão Inferior de Conferir Carrinho Fixo */}
      <footer className="footer-fixo-carrinho">
        <button className="btn-conferir-carrinho">
          Conferir Carrinho
        </button>
      </footer>
    </div>
  );
}

export default PaginaLoja;
