import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import {
  StyledServices,
  ServicesTitle,
  ServicesList,
  ServicesItem,
  CallBack,
  TextWrapper,
} from './styled';
import Text from '../../ui/text/text';
import Button from '../../ui/button/button';
import { Title, TitleSize } from '../../ui/title/title';

const servicesItems = [
  {
    title: 'Tokenization',
    text: 'Turning any assets into NFTs and tokens, creating usage mechanics for any business',
  },
  {
    title: 'Smart Contracts',
    text: 'Writing smart contracts for any tasks, exchangers, voting, DAO, tokens, NFTs, steaking and more',
  },
  {
    title: 'Advisory&Auditing',
    text: 'Consulting on development, writing technical assignments, conducting security audits of existing projects',
  },
  {
    title: 'Web3 interfaces',
    text: 'Creation of any web3 platforms, exchangers, NFT marketplaces and wallets',
  },
];

const Services = () => {
  return (
    <Wrapper>
      <StyledServices>
        <ServicesTitle as={'h2'} size={TitleSize.EXTRA_SMALL}>
          Services:
        </ServicesTitle>
        <ServicesList>
          {servicesItems &&
            servicesItems.length &&
            servicesItems.map((item) => (
              <ServicesItem>
                <Title as={'h3'} size={TitleSize.SMALL}>
                  {item.title}
                </Title>
                <Text>{item.text}</Text>
              </ServicesItem>
            ))}
        </ServicesList>
        <CallBack>
          <TextWrapper>
            <Title as={'h3'} size={TitleSize.SMALL}>
              Custom Solutions
            </Title>
            <Text>Realizing and promotion any unusual ideas.</Text>
          </TextWrapper>
          <Button simple={true} link="https://t.me/dashewski" target="_blank">
            Contact us
          </Button>
        </CallBack>
      </StyledServices>
    </Wrapper>
  );
};

export default Services;
