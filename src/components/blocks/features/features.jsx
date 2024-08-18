import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledFeatures, FeaturesList, FeatureItem } from './styled';

const featuresList = [
  { name: 'Wallets', weight: '900' },
  { name: 'RWA', weight: '400' },
  { name: 'Coins', weight: '700' },
  { name: 'web3', weight: '400' },
  { name: 'Scripts', weight: '700' },
  { name: 'Smart Contracts', weight: '900' },
  { name: 'NFT', weight: '400' },
  { name: 'Bots', weight: '900' },
  { name: 'Tokenization', weight: '400' },
  { name: 'Exchangers', weight: '700' },
  { name: 'Design', weight: '400' },
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
