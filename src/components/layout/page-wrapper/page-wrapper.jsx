import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../../pages/main-page/main-page';
import Case from '../../pages/case/case';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CasesData from '../../blocks/cases/cases.constants';
import ScrollToTop from '../../../elements/scroll-to-top';

const PageWrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/cases/:id" element={<Case cases={CasesData} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default PageWrapper;
