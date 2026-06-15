export interface Word {
  id: string;
  german: string;
  article?: 'der' | 'die' | 'das';
  english: string;
  portuguese: string;
  category: 'noun' | 'verb' | 'adjective' | 'adverb' | 'other';
  example?: string;
  exampleTranslation?: string;
  isCustom: boolean;
  level: number; // 0-5 spaced repetition
  nextReview: number; // timestamp
}

export interface GrammarExercise {
  id: string;
  type: 'article' | 'pronoun' | 'preposition';
  question: string; // sentence with ___ blank
  options: string[]; // 4 options
  answer: string;
  explanation: string; // in Portuguese
  caseLabel?: string; // "Nominativ", "Dativ" etc.
}
