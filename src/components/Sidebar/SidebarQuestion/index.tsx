import { useState } from 'react';
import { UseFieldArrayAppend } from 'react-hook-form';

import { SIDEBAR_OPTIONS_BY_TYPE } from '@/constants/sidebar';
import { FormValues } from '@/types/templateForm';

import SidebarQuestionOptions from './SidebarQuestionOptions';

type SidebarQuestionProp = {
  append: UseFieldArrayAppend<FormValues, 'questions'>;
};

export default function SidebarQuestion({ append }: SidebarQuestionProp) {
  const [selectedOptions, setSelectedOptions] = useState(
    SIDEBAR_OPTIONS_BY_TYPE[0]
  );

  return (
    <div>
      <div>
        <button onClick={() => setSelectedOptions(SIDEBAR_OPTIONS_BY_TYPE[0])}>
          +기본 문항
        </button>
        <button onClick={() => setSelectedOptions(SIDEBAR_OPTIONS_BY_TYPE[1])}>
          +전문 문항
        </button>
      </div>
      <SidebarQuestionOptions
        selectedOptions={selectedOptions.options}
        append={append}
      />
    </div>
  );
}
