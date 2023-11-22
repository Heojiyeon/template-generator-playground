import { Question } from '@/types/templateForm';

import QuestionContent from './QuestionContent';
import QuestionFooter from './QuestionFooter';
import QuestionHeader from './QuestionHeader';

type QuestionProp = {
  question: Question;
};

export default function Question({ question }: QuestionProp) {
  const { order, name, type } = question;

  return (
    <div>
      <QuestionHeader order={order} name={name} type={type} />
      <QuestionContent />
      <QuestionFooter />
    </div>
  );
}
