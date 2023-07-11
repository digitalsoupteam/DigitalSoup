import React from 'react';
import { Wrapper } from './styled';
import Header from '../header/header';
import Main from '../../pages/main-page/main-page';

const pageWrapper = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default pageWrapper;
