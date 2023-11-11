import styled from '@emotion/styled';
import { ReactNode } from 'react';

type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  return (
    <LayoutContainer>
      <div>Template Generator</div>
      <main>{children}</main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled('div')`
  width: 80rem;
  margin: 4rem;
`;
