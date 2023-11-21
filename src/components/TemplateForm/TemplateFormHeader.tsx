import styled from '@emotion/styled';
import { UseFormRegister } from 'react-hook-form';

import useStaticFormStore from '@/store/useStaticFormStore';
import { FormValues } from '@/types/templateForm';

type TemplateFormHeaderProp = {
  register: UseFormRegister<FormValues>;
};

export default function TemplateFormHeader({
  register,
}: TemplateFormHeaderProp) {
  const templateTitle = useStaticFormStore(state => state.templateTitle);
  const updateTitle = useStaticFormStore(state => state.updateTitle);

  const templateSubscription = useStaticFormStore(
    state => state.templateSubscription
  );
  const updateSubScription = useStaticFormStore(
    state => state.updateSubScription
  );
  return (
    <div>
      <InputContainer>
        <label htmlFor="template-title">템플릿 제목 *</label>
        <input
          id="template-title"
          {...register('templateTitle')}
          onChange={e => updateTitle(e.target.value)}
          value={templateTitle}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="template-subscription">설명</label>
        <input
          id="template-subscription"
          {...register('templateSubscription')}
          value={templateSubscription}
          onChange={e => updateSubScription(e.target.value)}
        />
      </InputContainer>
    </div>
  );
}

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
