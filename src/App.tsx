import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Flashcards from './pages/Flashcards';
import MultipleChoice from './pages/MultipleChoice';
import Writing from './pages/Writing';
import Listening from './pages/Listening';
import Grammar from './pages/Grammar';
import AddWord from './pages/AddWord';
import VocabularyList from './pages/VocabularyList';

function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold px-2 py-1 rounded-lg transition-colors ${
      isActive
        ? 'text-[#58CC02] bg-[#f0fce0]'
        : 'text-gray-600 hover:text-[#58CC02] hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center gap-1 flex-wrap">
        <NavLink to="/" end className={linkClass}>
          🏠 Início
        </NavLink>
        <NavLink to="/flashcards" className={linkClass}>
          📚 Flashcards
        </NavLink>
        <NavLink to="/multiple-choice" className={linkClass}>
          🎯 Múltipla Escolha
        </NavLink>
        <NavLink to="/writing" className={linkClass}>
          ✍️ Escrita
        </NavLink>
        <NavLink to="/listening" className={linkClass}>
          🎧 Audição
        </NavLink>
        <NavLink to="/grammar" className={linkClass}>
          📝 Gramática
        </NavLink>
        <NavLink to="/vocabulary" className={linkClass}>
          📖 Vocabulário
        </NavLink>
        <NavLink to="/add-word" className={linkClass}>
          ➕ Adicionar
        </NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#F7F7F7]">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/multiple-choice" element={<MultipleChoice />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/listening" element={<Listening />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/add-word" element={<AddWord />} />
            <Route path="/vocabulary" element={<VocabularyList />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
