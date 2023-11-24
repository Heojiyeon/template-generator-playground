import { create } from 'zustand';

import { QuestionValues } from '@/types/templateForm';

type State = {
  questions: QuestionValues[];
};

type Action = {
  appendQuestions: (question: QuestionValues) => void;
};

const useDynamicFormStore = create<State & Action>(set => ({
  questions: [],
  appendQuestions: question =>
    set(state => ({
      questions: [...state.questions, question],
    })),
}));

export default useDynamicFormStore;
