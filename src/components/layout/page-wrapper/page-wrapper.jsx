import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../../pages/main-page/main-page';
import Case from '../../pages/case/case';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cases from '../../../mocks/cases.json';
import ScrollToTop from '../../../elements/scroll-to-top';

const PageWrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<Main />} />
          <Route path="/cases" element={<Main />} />
          <Route path="/contacts" element={<Main />} />
          <Route path="/cases/:id" element={<Case cases={cases} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default PageWrapper;
