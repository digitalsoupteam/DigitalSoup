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

const Services = () => {
  return (
    <Wrapper>
      <StyledServices>
        <ServicesTitle as={'h2'} size={TitleSize.EXTRA_SMALL}>
          Services:
        </ServicesTitle>
        <ServicesList>
          <ServicesItem>
            <Title as={'h3'} size={TitleSize.SMALL}>
              Tokenization
            </Title>
            <Text>
              Development of smart contracts, NFTs, Tokens, audits and Security
            </Text>
          </ServicesItem>
          <ServicesItem>
            <Title as={'h3'} size={TitleSize.SMALL}>
              DeFi
            </Title>
            <Text>Integrate your project with Decentralized Finance Dapps</Text>
          </ServicesItem>
          <ServicesItem>
            <Title as={'h3'} size={TitleSize.SMALL}>
              Promotion
            </Title>
            <Text>
              Creating a promotion strategy, social media marketing, advertising
              and community management
            </Text>
          </ServicesItem>
          <ServicesItem>
            <Title as={'h3'} size={TitleSize.SMALL}>
              Web3 interfaces
            </Title>
            <Text>
              Creation of any web3 platforms, exchangers, NFT marketplaces and
              wallets
            </Text>
          </ServicesItem>
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
