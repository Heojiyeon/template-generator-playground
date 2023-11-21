import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { FormValues } from '@/types/templateForm';

import TemplateFormContent from './TemplateFormContent';
import TemplateFormHeader from './TemplateFormHeader';

export default function TemplateForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      templateTitle: '',
      templateSubscription: '',
      questions: [],
    },
  });

  const fieldArray = useFieldArray({
    name: 'questions',
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TemplateFormHeader register={register} />
      <TemplateFormContent fieldArray={fieldArray} register={register} />
      <input type="submit" />
    </form>
  );
}
