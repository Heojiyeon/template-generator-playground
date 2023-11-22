import { create } from 'zustand';

import { Question } from '@/types/templateForm';

type State = {
  questions: Question[];
};

type Action = {
  appendQuestions: (question: Question) => void;
};

const useDynamicFormStore = create<State & Action>(set => ({
  questions: [],
  appendQuestions: question =>
    set(state => ({
      questions: [...state.questions, question],
    })),
}));

export default useDynamicFormStore;
