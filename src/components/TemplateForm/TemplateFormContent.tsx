import { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import { FormValues } from '.';

type TemplateFormContentProp = {
  fieldArray: UseFieldArrayReturn<FormValues, 'questions', 'id'>;
  register: UseFormRegister<FormValues>;
};

export default function TemplateFormContent({
  fieldArray,
  register,
}: TemplateFormContentProp) {
  const { fields, append, remove } = fieldArray;

  return (
    <div>
      TemplateFormContent
      <button
        onClickCapture={e => e.preventDefault()}
        onClick={() =>
          append({
            type: 'text',
            title: '',
            description: '',
            option: false,
            isRequired: false,
          })
        }
      >
        +
      </button>
      {fields.map((field, idx) => (
        <li key={field.id}>
          <div>{field.type}</div>
          <input
            {...register(`questions.${idx}.title` as const)}
            defaultValue={field.title}
          />
          <input
            {...register(`questions.${idx}.description` as const)}
            defaultValue={field.description}
          />
        </li>
      ))}
    </div>
  );
}
