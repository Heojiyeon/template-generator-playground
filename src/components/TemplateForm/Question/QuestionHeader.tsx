import { QuestionValues } from '@/types/templateForm';

type QuestionHeaderProp = Pick<QuestionValues, 'order' | 'name' | 'type'>;

export default function QuestionHeader({
  order,
  name,
  type,
}: QuestionHeaderProp) {
  let option;

  if (type === 'text') {
    option = (
      <div>
        <label htmlFor="short">단답형</label>
        <input type="radio" name="text-type" id="short" defaultChecked />
        <label htmlFor="short">장문형</label>
        <input type="radio" name="text-type" id="long" />
      </div>
    );
  } else if (type === 'select') {
    option = (
      <div>
        <label htmlFor="duplicate">중복 선택 허용</label>
        <input type="checkbox" name="duplicate" id="duplicate" />
      </div>
    );
  }

  return (
    <div>
      <div>
        {order < 10 ? `0${order}` : `${order}`}. {name}
      </div>
      {option}
    </div>
  );
}
