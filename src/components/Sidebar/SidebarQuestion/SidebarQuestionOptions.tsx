import { v4 as uuidv4 } from 'uuid';

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
              id: `${uuidv4}`,
              order: Number(`${idx + 1}`),
              type: `${option.type}`,
              name: `${option.name}`,
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
