import { useState } from 'react';
import { useVocabulary } from '../hooks/useVocabulary';
import { Word } from '../types';

type Category = Word['category'];
type Article = 'der' | 'die' | 'das' | '';

const categories: { value: Category; label: string }[] = [
  { value: 'noun', label: 'Substantivo' },
  { value: 'verb', label: 'Verbo' },
  { value: 'adjective', label: 'Adjetivo' },
  { value: 'adverb', label: 'Advérbio' },
  { value: 'other', label: 'Outro' },
];

export default function AddWord() {
  const { addWord } = useVocabulary();
  const [german, setGerman] = useState('');
  const [article, setArticle] = useState<Article>('');
  const [english, setEnglish] = useState('');
  const [portuguese, setPortuguese] = useState('');
  const [category, setCategory] = useState<Category>('noun');
  const [example, setExample] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validate = (): boolean => {
    const errs: string[] = [];
    if (!german.trim()) errs.push('A palavra em alemão é obrigatória.');
    if (!portuguese.trim()) errs.push('A tradução em português é obrigatória.');
    if (category === 'noun' && !article) errs.push('Substantivos precisam de um artigo.');
    setErrors(errs);
    return errs.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addWord({
      german: german.trim(),
      article: article as Word['article'] || undefined,
      english: english.trim(),
      portuguese: portuguese.trim(),
      category,
      example: example.trim() || undefined,
      exampleTranslation: exampleTranslation.trim() || undefined,
    });

    // Reset form
    setGerman('');
    setArticle('');
    setEnglish('');
    setPortuguese('');
    setCategory('noun');
    setExample('');
    setExampleTranslation('');
    setErrors([]);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1CB0F6] outline-none transition-all bg-white text-[#3C3C3C] font-medium';
  const labelClass = 'block text-sm font-semibold text-gray-600 mb-1';

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-[#3C3C3C]">➕ Adicionar Palavra</h1>

      {success && (
        <div className="bg-[#f0fce0] border border-[#58CC02] rounded-2xl p-4 flex items-center gap-3 bounce-in">
          <span className="text-2xl">🎉</span>
          <div>
            <div className="font-bold text-[#58CC02]">Palavra adicionada!</div>
            <div className="text-sm text-gray-600">Ela já está disponível em todos os exercícios.</div>
          </div>
        </div>
      )}

      {errors.length > 0 && (
        <div className="bg-red-50 border border-[#FF4B4B] rounded-2xl p-4 space-y-1">
          {errors.map((err) => (
            <div key={err} className="text-sm text-[#FF4B4B] flex items-center gap-2">
              <span>⚠️</span> {err}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category first to determine article need */}
        <div>
          <label className={labelClass}>Categoria</label>
          <select
            value={category}
            onChange={(e) => { setCategory(e.target.value as Category); setArticle(''); }}
            className={inputClass}
          >
            {categories.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          {/* Article - only for nouns */}
          {category === 'noun' && (
            <div className="w-32 flex-shrink-0">
              <label className={labelClass}>Artigo *</label>
              <select
                value={article}
                onChange={(e) => setArticle(e.target.value as Article)}
                className={inputClass}
              >
                <option value="">—</option>
                <option value="der">der</option>
                <option value="die">die</option>
                <option value="das">das</option>
              </select>
            </div>
          )}

          {/* German word */}
          <div className="flex-1">
            <label className={labelClass}>
              Palavra em alemão *
            </label>
            <input
              type="text"
              value={german}
              onChange={(e) => setGerman(e.target.value)}
              placeholder={category === 'noun' ? 'ex: Baum' : 'ex: laufen'}
              className={inputClass}
              autoFocus
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Tradução em português *</label>
          <input
            type="text"
            value={portuguese}
            onChange={(e) => setPortuguese(e.target.value)}
            placeholder="ex: árvore"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Tradução em inglês</label>
          <input
            type="text"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            placeholder="ex: tree"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Frase de exemplo (em alemão)</label>
          <input
            type="text"
            value={example}
            onChange={(e) => setExample(e.target.value)}
            placeholder="ex: Der Baum ist sehr groß."
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Tradução do exemplo (em português)</label>
          <input
            type="text"
            value={exampleTranslation}
            onChange={(e) => setExampleTranslation(e.target.value)}
            placeholder="ex: A árvore é muito grande."
            className={inputClass}
          />
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-4">
          💾 Salvar Palavra
        </button>
      </form>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">
        <strong>💡 Dica:</strong> Adicione palavras que você encontra no dia a dia! Elas aparecerão nos flashcards, múltipla escolha, escrita e audição.
      </div>
    </div>
  );
}
