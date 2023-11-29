import { UseFieldArrayAppend } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { FormValues } from '@/types/templateForm';

type SidebarQuestionOptions = {
  selectedOptions: {
    type: string;
    name: string;
  }[];
  append: UseFieldArrayAppend<FormValues, 'questions'>;
};

export default function SidebarQuestionOptions({
  selectedOptions,
  append,
}: SidebarQuestionOptions) {
  return (
    <div>
      {selectedOptions.map((option, idx) => (
        <li
          key={idx}
          onClick={() =>
            append({
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
