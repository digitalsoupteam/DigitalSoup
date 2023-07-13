import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../../pages/main-page/main-page';

const pageWrapper = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default pageWrapper;
