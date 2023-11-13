import styled from '@emotion/styled';

import SidebarController from './SidebarController';
import SidebarQuestion from './SidebarQuestion';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarQuestion />
      <SidebarController />
    </SidebarContainer>
  );
}

const SidebarContainer = styled('div')`
  position: fixed;
  top: 2rem;
  right: 10rem;
`;
