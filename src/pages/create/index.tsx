import { useFieldArray, useForm } from 'react-hook-form';

import Sidebar from '@/components/Sidebar';
import TemplateForm from '@/components/TemplateForm';
import { FormValues } from '@/types/templateForm';

export default function Create() {
  const { control, register } = useForm<FormValues>({
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

  return (
    <>
      <TemplateForm register={register} fieldArray={fieldArray} />
      <Sidebar append={fieldArray.append} />
    </>
  );
}
