import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizState {
  step: number;
  answers: Record<string, string>;
  setAnswer: (questionId: string, answer: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      step: 1,
      answers: {},
      
      // Salva a resposta da pergunta atual
      setAnswer: (questionId, answer) => 
        set((state) => ({
          answers: { ...state.answers, [questionId]: answer }
        })),
        
      // Avança um passo no quiz
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      
      // Volta um passo (garantindo que não fique menor que 1)
      prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
      
      // Limpa tudo (útil para quando o usuário finalizar o contato)
      resetQuiz: () => set({ step: 1, answers: {} }),
    }),
    {
      name: 'mecanica-quiz-storage', // Nome da "gaveta" no localStorage
    }
  )
);