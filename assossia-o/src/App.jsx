import { Routes, Route } from 'react-router-dom';
import PaginaInicio from "./pages/Home/PaginaInicio.jsx";
import LojasComponente from "./pages/Lojas/Lojas.jsx";
import PaginaLoja from "./pages/Lojas/PaginaLoja.jsx"; // 1. MUDANÇA: Importando a nova tela

export default function App() {
  return (
    <Routes>
      {/* Quando a URL for "/", mostra apenas a Home de boas-vindas */}
      <Route path="/" element={<PaginaInicio />} />
      
      {/* Quando o botão mandar para "/lojas", mostra o catálogo de todas as lojas */}
      <Route path="/lojas" element={<LojasComponente />} />

      {/* 2. MUDANÇA: Rota dinâmica que vai ler o ID do Supabase para abrir a loja certa */}
      <Route path="/loja/:id" element={<PaginaLoja />} />
    </Routes>
  );
}
  