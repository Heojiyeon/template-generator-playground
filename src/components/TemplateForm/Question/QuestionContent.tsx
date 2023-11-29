import styled from '@emotion/styled';
import { UseFormRegister } from 'react-hook-form';

import { FormValues } from '@/types/templateForm';

type QuestionContentProp = {
  register: UseFormRegister<FormValues>;
};

export default function QuestionContent({ register }: QuestionContentProp) {
  return (
    <QuestionContentContainer>
      <label htmlFor="question-title">문항 제목</label>
      <input
        id="question-title"
        placeholder="문항 제목을 적어주세요. (최대 50자)"
        {...register(`templateTitle`)}
      />
      <label htmlFor="question-description">문항 설명</label>
      <input
        id="question-description"
        placeholder="문항 설명을 적어주세요. (생략가능)"
        {...register(`templateSubscription`)}
      />
    </QuestionContentContainer>
  );
}

const QuestionContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
