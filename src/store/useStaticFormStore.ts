import { create } from 'zustand';

type State = {
  templateTitle: string;
  templateSubscription?: string;
};

type Action = {
  updateTitle: (templateTitle: State['templateTitle']) => void;
  updateSubScription: (
    templateSubScription: State['templateSubscription']
  ) => void;
};

const useStaticFormStore = create<State & Action>(set => ({
  templateTitle: '제목이 없는 템플릿',
  templateSubscription: '',
  updateTitle: templateTitle => set(() => ({ templateTitle })),
  updateSubScription: templateSubscription =>
    set(() => ({ templateSubscription })),
}));

export default useStaticFormStore;
