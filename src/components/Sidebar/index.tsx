import styled from '@emotion/styled';
import { UseFieldArrayAppend } from 'react-hook-form';

import { FormValues } from '@/types/templateForm';

import SidebarController from './SidebarController';
import SidebarQuestion from './SidebarQuestion';

type SidebarProp = {
  append: UseFieldArrayAppend<FormValues, 'questions'>;
};

export default function Sidebar({ append }: SidebarProp) {
  return (
    <SidebarContainer>
      <SidebarQuestion append={append} />
      <SidebarController />
    </SidebarContainer>
  );
}

const SidebarContainer = styled('div')`
  position: fixed;
  top: 2rem;
  right: 10rem;
`;
