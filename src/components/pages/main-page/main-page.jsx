import React from 'react';
import Hero from '../../blocks/hero/hero';
import Features from '../../blocks/features/features';
import Since from '../../blocks/since/since';
import Services from '../../blocks/services/services';
import AboutUs from '../../blocks/about-us/about-us';
import Idea from '../../blocks/idea/idea';
import HowItWorks from '../../blocks/how-it-works/how-it-works';
import ContactBar from '../../blocks/contact-bar/contact-bar';
import Cases from '../../blocks/cases/cases';
import CasesData from '../../blocks/cases/cases.constants';

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Since />
      <Services />
      <AboutUs />
      <Idea />
      <Cases cases={CasesData} />
      <HowItWorks />
      <ContactBar />
    </main>
  );
};

export default MainPage;
