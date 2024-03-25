import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledFeatures, FeaturesList, FeatureItem } from './styled';

const featuresList = [
  { name: 'Wallets', weigth: '900' },
  { name: 'SMM', weigth: '400' },
  { name: 'Coins', weigth: '700' },
  { name: 'web3', weigth: '400' },
  { name: 'Scripts', weigth: '700' },
  { name: 'Smart Contracts', weigth: '900' },
  { name: 'NFT', weigth: '400' },
  { name: 'Bots', weight: '900' },
  { name: 'Tokenization', weigth: '400' },
  { name: 'Exchangers', weight: '700' },
  { name: 'Design', weigth: '400' },
];

const Features = () => {
  return (
    <Wrapper>
      <StyledFeatures>
        <FeaturesList>
          {featuresList &&
            featuresList.length &&
            featuresList.map((item) => (
              <FeatureItem $weight={item.weight}>{item.name}</FeatureItem>
            ))}
        </FeaturesList>
      </StyledFeatures>
    </Wrapper>
  );
};

export default Features;
