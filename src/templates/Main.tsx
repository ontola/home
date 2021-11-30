import { ReactNode } from 'react';

import { styled } from '@stitches/react';

import { NavigationBar } from '../components/NavigationBar';
import { globalStyles } from '../styles/globalStyles';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Container = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
});

const Main = (props: IMainProps) => {
  globalStyles();
  return (
    <>
      {props.meta}
      <NavigationBar />
      <Container>{props.children}</Container>
    </>
  );
};

export { Main };
