import { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import useDynamicFormStore from '@/store/useDynamicFormStore';
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
  const { fields, append, remove } = fieldArray;

  const questions = useDynamicFormStore(state => state.questions);

  return (
    <div>
      {questions.map((question, idx) => (
        <li key={idx}>
          <Question question={question} />
        </li>
      ))}
    </div>
  );
}
