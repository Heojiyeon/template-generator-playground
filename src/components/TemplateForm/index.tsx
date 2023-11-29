import { UseFieldArrayReturn, UseFormRegister } from 'react-hook-form';

import { FormValues } from '@/types/templateForm';

import TemplateFormContent from './TemplateFormContent';
import TemplateFormHeader from './TemplateFormHeader';

type TemplateFormProp = {
  register: UseFormRegister<FormValues>;
  fieldArray: UseFieldArrayReturn<FormValues, 'questions', 'id'>;
};

export default function TemplateForm({
  register,
  fieldArray,
}: TemplateFormProp) {
  return (
    <>
      <TemplateFormHeader register={register} />
      <TemplateFormContent fieldArray={fieldArray} register={register} />
    </>
  );
}
