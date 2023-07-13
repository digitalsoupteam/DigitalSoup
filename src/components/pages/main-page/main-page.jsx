import React from 'react';
import Hero from '../../blocks/hero/hero';
import Features from '../../blocks/features/features';
import Since from '../../blocks/since/since';
import Services from '../../blocks/services/services';
import AboutUs from '../../blocks/about-us/abou-us';
import Idea from '../../blocks/idea/idea';
import HowItWorks from '../../blocks/how-it-works/how-it-works';
import Contacts from '../../blocks/contacts/contacts';

const MainPage = () => {
  return (
    <main>
      <Hero></Hero>
      <Features></Features>
      <Since></Since>
      <Services></Services>
      <AboutUs></AboutUs>
      <Idea></Idea>
      <HowItWorks></HowItWorks>
      <Contacts></Contacts>
    </main>
  );
};

export default MainPage;
