import { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import { FormValues } from '@/types/templateForm';

import Question from './Question';

type TemplateFormContentProp = {
  fieldArray: UseFieldArrayReturn<FormValues, 'questions', 'id'>;
  register: UseFormRegister<FormValues>;
};

export default function TemplateFormContent({
  fieldArray,
  register,
}: TemplateFormContentProp) {
  const { fields, remove } = fieldArray;

  return (
    <div>
      {fields.map((question, idx) => (
        <li key={idx}>
          <Question
            currentIndex={idx}
            question={question}
            register={register}
            remove={remove}
          />
        </li>
      ))}
    </div>
  );
}
