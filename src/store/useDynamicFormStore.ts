import { create } from 'zustand';

type Question = {
  type: string;
  title: string;
  description?: string;
  option?: boolean;
  details?: string[];
  isRequired: boolean;
};

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
