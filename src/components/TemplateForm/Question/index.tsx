import {
  FieldArrayWithId,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';

import { FormValues } from '@/types/templateForm';

import QuestionContent from './QuestionContent';
import QuestionFooter from './QuestionFooter';
import QuestionHeader from './QuestionHeader';

type QuestionProp = {
  currentIndex: number;
  question: FieldArrayWithId<FormValues, 'questions', 'id'>;
  register: UseFormRegister<FormValues>;
  remove: UseFieldArrayRemove;
};

export default function Question({
  currentIndex,
  question,
  register,
  remove,
}: QuestionProp) {
  const { order, name, type } = question;

  return (
    <div>
      <QuestionHeader order={order} name={name} type={type} />
      <QuestionContent register={register} />
      <QuestionFooter currentIndex={currentIndex} remove={remove} />
    </div>
  );
}
