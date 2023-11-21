import useDynamicFormStore from '@/store/useDynamicFormStore';

type SidebarQuestionOptions = {
  selectedOptions: {
    type: string;
    name: string;
  }[];
};

export default function SidebarQuestionOptions({
  selectedOptions,
}: SidebarQuestionOptions) {
  const appendQuestions = useDynamicFormStore(state => state.appendQuestions);

  return (
    <div>
      {selectedOptions.map((option, idx) => (
        <li
          key={idx}
          onClick={() =>
            appendQuestions({
              id: `${idx} ${option.name}`,
              order: Number(`${idx}`),
              type: `${option.type}`,
              title: '',
              isRequired: false,
            })
          }
        >
          {option.name}
        </li>
      ))}
    </div>
  );
}
