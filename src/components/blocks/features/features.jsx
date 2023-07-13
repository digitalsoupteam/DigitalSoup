import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledFeatures, FeaturesList, FeatureItem } from './styled';

const Features = () => {
  return (
    <Wrapper>
      <StyledFeatures>
        <FeaturesList>
          <FeatureItem $weight={'900'}>Wallets</FeatureItem>
          <FeatureItem>SMM</FeatureItem>
          <FeatureItem $weight={'700'}>Coins</FeatureItem>
          <FeatureItem>web3</FeatureItem>
          <FeatureItem $weight={'700'}>Scripts</FeatureItem>
          <FeatureItem $weight={'900'}>Smart Contracts</FeatureItem>
          <FeatureItem>NFT</FeatureItem>
          <FeatureItem $weight={'900'}>Bots</FeatureItem>
          <FeatureItem>Community management</FeatureItem>
          <FeatureItem $weight={'700'}>Exchangers</FeatureItem>
          <FeatureItem>Design</FeatureItem>
        </FeaturesList>
      </StyledFeatures>
    </Wrapper>
  );
};

export default Features;
