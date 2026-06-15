import { useState, useEffect, useCallback } from 'react';
import { Word } from '../types';
import { builtinVocabulary } from '../data/vocabulary';

const CUSTOM_KEY = 'german-custom-words';
const PROGRESS_KEY = 'german-word-progress';

interface ProgressMap {
  [id: string]: { level: number; nextReview: number };
}

function loadCustomWords(): Word[] {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? (JSON.parse(raw) as Word[]) : [];
  } catch {
    return [];
  }
}

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function applyProgress(words: Word[], progress: ProgressMap): Word[] {
  return words.map((w) => {
    const p = progress[w.id];
    if (p) return { ...w, level: p.level, nextReview: p.nextReview };
    return w;
  });
}

// Simple spaced-repetition intervals (in ms)
const LEVEL_INTERVALS: number[] = [
  0,
  1 * 60 * 1000,        // level 1 → 1 min
  10 * 60 * 1000,       // level 2 → 10 min
  60 * 60 * 1000,       // level 3 → 1 hour
  24 * 60 * 60 * 1000,  // level 4 → 1 day
  7 * 24 * 60 * 60 * 1000, // level 5 → 7 days
];

export function useVocabulary() {
  const [customWords, setCustomWords] = useState<Word[]>(loadCustomWords);
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);

  // Persist custom words
  useEffect(() => {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customWords));
  }, [customWords]);

  // Persist progress
  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const allWords: Word[] = applyProgress(
    [...builtinVocabulary, ...customWords],
    progress
  );

  const addWord = useCallback((word: Omit<Word, 'id' | 'isCustom' | 'level' | 'nextReview'>) => {
    const newWord: Word = {
      ...word,
      id: `custom-${Date.now()}`,
      isCustom: true,
      level: 0,
      nextReview: 0,
    };
    setCustomWords((prev) => [...prev, newWord]);
  }, []);

  const deleteWord = useCallback((id: string) => {
    setCustomWords((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const updateProgress = useCallback((id: string, known: boolean) => {
    setProgress((prev) => {
      const current = prev[id] ?? { level: 0, nextReview: 0 };
      let newLevel = known ? Math.min(current.level + 1, 5) : Math.max(current.level - 1, 0);
      const interval = LEVEL_INTERVALS[newLevel] ?? 0;
      return {
        ...prev,
        [id]: { level: newLevel, nextReview: Date.now() + interval },
      };
    });
  }, []);

  const getRandomWords = useCallback(
    (count: number, filter: 'all' | 'review' | 'custom' = 'all'): Word[] => {
      let pool = allWords;
      if (filter === 'review') {
        pool = allWords.filter((w) => w.nextReview <= Date.now());
      } else if (filter === 'custom') {
        pool = allWords.filter((w) => w.isCustom);
      }
      // Shuffle
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, shuffled.length));
    },
    [allWords]
  );

  const wordsKnown = allWords.filter((w) => w.level >= 3).length;
  const wordsDueForReview = allWords.filter(
    (w) => w.level > 0 && w.nextReview <= Date.now()
  ).length;

  return {
    allWords,
    customWords,
    addWord,
    deleteWord,
    updateProgress,
    getRandomWords,
    wordsKnown,
    wordsDueForReview,
  };
}
