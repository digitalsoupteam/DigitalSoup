import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { Title, TitleSize } from '../../ui/title/title';
import Text from '../../ui/text/text';
import Button from '../../ui/button/button';
import SocialIco from '../../ui/social-ico/social-ico';
import {
  StyledContacts,
  BackgroundBar,
  InnerContainer,
  Socials,
  SocialsItem,
} from './styled';
import tgIco from '../../../assets/tg-ico.svg';
import youtubeIco from '../../../assets/youtube-ico.svg';
import ghIco from '../../../assets/gh-ico.svg';
import BackgroundCircle from '../../../elements/background';

const Contacts = () => {
  return (
    <StyledContacts>
      <BackgroundBar>
        <Wrapper>
          <InnerContainer>
            <Title size={TitleSize.BIG}>Get in touch</Title>
            <Text>
              We will consult, select the best solution, tell you how to
              implement your task profitably. We become your best outsourcing
              team!
            </Text>
            <BackgroundCircle
              $top={{ mobile: '-32px', desktop: '-92px' }}
              $bottom={{ mobile: 'auto', desktop: '0' }}
              $left={{ mobile: 'auto', desktop: 'auto' }}
              $right={{ mobile: '12px', desktop: '331px' }}
              $width={{ mobile: '236px', desktop: '439px' }}
              $height={{ mobile: '134px', desktop: '362px' }}
              $bgColor={(props) => props.theme.bgPinkColor}
              $blur="115px"
            />
            <BackgroundCircle
              $top={{ mobile: '-8px', desktop: '-48px' }}
              $bottom={{ mobile: 'auto', desktop: '0' }}
              $left={{ mobile: '12px', desktop: '242px' }}
              $right={{ mobile: 'auto', desktop: 'auto' }}
              $width={{ mobile: '187px', desktop: '347px' }}
              $height={{ mobile: '146px', desktop: '274px' }}
              $bgColor={(props) => props.theme.bgBlueColor}
              $blur="115px"
            />
          </InnerContainer>
        </Wrapper>
      </BackgroundBar>
      <Wrapper>
        <Socials>
          <SocialsItem>
            <SocialIco src={tgIco} alt={'telegram icon'} />
            <Button>Telegram</Button>
          </SocialsItem>
          <SocialsItem>
            <SocialIco src={youtubeIco} alt={'youtube icon'} />
            <Button>YouTube</Button>
          </SocialsItem>
          <SocialsItem>
            <SocialIco src={tgIco} alt={'telegram icon'} />
            <Button>Ceo</Button>
          </SocialsItem>
          <SocialsItem>
            <SocialIco src={ghIco} alt={'github icon'} />
            <Button>Github</Button>
          </SocialsItem>
        </Socials>
      </Wrapper>
    </StyledContacts>
  );
};

export default Contacts;
