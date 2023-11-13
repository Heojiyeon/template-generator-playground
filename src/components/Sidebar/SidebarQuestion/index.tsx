import { useState } from 'react';

import { SIDEBAR_OPTIONS_BY_TYPE } from '@/constants/sidebar';

import SidebarQuestionOptions from './SidebarQuestionOptions';

export default function SidebarQuestion() {
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
      <SidebarQuestionOptions selectedOptions={selectedOptions.options} />
    </div>
  );
}
