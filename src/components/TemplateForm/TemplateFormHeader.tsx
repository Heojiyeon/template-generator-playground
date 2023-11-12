import styled from '@emotion/styled';
import { UseFormRegister } from 'react-hook-form';

import { FormValues } from '.';

type TemplateFormHeaderProp = {
  register: UseFormRegister<FormValues>;
};

export default function TemplateFormHeader({
  register,
}: TemplateFormHeaderProp) {
  return (
    <div>
      <InputContainer>
        <label htmlFor="template-title">템플릿 제목 *</label>
        <input
          id="template-title"
          defaultValue="제목이 없는 템플릿"
          {...register('templateTitle')}
        />
      </InputContainer>
      <InputContainer>
        <label>설명</label>
        <input {...register('templateSubscription')} />
      </InputContainer>
    </div>
  );
}

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
