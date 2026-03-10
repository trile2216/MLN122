import { useState, useCallback } from 'react';
import questions from '../data/questions';

const SCREEN = {
  START: 'start',
  QUIZ: 'quiz',
  RESULT: 'result',
};

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function useQuiz() {
  const [screen, setScreen] = useState(SCREEN.START);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // answers[i] = selected option index, or null if not yet answered
  const [answers, setAnswers] = useState([]);

  const question = shuffledQuestions[currentQuestion];
  const selectedIndex = answers[currentQuestion] ?? null;
  const totalQuestions = shuffledQuestions.length;
  const score = answers.filter((ans, i) => ans !== null && ans === shuffledQuestions[i]?.correct).length;

  const startQuiz = useCallback(() => {
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
    setAnswers(new Array(shuffled.length).fill(null));
    setCurrentQuestion(0);
    setScreen(SCREEN.QUIZ);
  }, []);

  const selectOption = useCallback(
    (index) => {
      // Lock answer once submitted
      setAnswers((prev) => {
        if (prev[currentQuestion] !== null) return prev;
        const next = [...prev];
        next[currentQuestion] = index;
        return next;
      });
    },
    [currentQuestion],
  );

  const goNext = useCallback(() => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((i) => i + 1);
    } else {
      setScreen(SCREEN.RESULT);
    }
  }, [currentQuestion, totalQuestions]);

  const goPrev = useCallback(() => {
    setCurrentQuestion((i) => Math.max(0, i - 1));
  }, []);

  const restart = useCallback(() => {
    setScreen(SCREEN.START);
    setShuffledQuestions([]);
    setAnswers([]);
    setCurrentQuestion(0);
  }, []);

  return {
    screen,
    currentQuestion,
    score,
    selectedIndex,
    question,
    totalQuestions,
    answers,
    startQuiz,
    selectOption,
    goNext,
    goPrev,
    restart,
    SCREEN,
  };
}
