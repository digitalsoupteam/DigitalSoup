import React from 'react';
import Hero from '../../blocks/hero/hero';
import Features from '../../blocks/features/features';
import Since from '../../blocks/since/since';
import Services from '../../blocks/services/services';
import AboutUs from '../../blocks/about-us/about-us';
import Idea from '../../blocks/idea/idea';
import HowItWorks from '../../blocks/how-it-works/how-it-works';
import ContactBar from '../../blocks/contact-bar/contact-bar';
import Contacts from '../../blocks/contacts/contacts';
import Cases from '../../blocks/cases/cases';
import casesData from '../../../mocks/cases.json';

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Since />
      <Services />
      <AboutUs />
      <Idea />
      <Cases cases={casesData} />
      <HowItWorks />
      <ContactBar
        text={
          'We will consult, help you select the best solution, and provide guidance on how to implement your task profitably. We aim to become your best outsourcing team!'
        }
      />
      <Contacts />
    </main>
  );
};

export default MainPage;
