import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import Button from '../../ui/button/button';
import SocialIco from '../../ui/social-ico/social-ico';
import { StyledContacts, Socials, SocialsItem } from './styled';
import tgIco from '../../../assets/tg-ico.svg';
// import youtubeIco from '../../../assets/youtube-ico.svg';
// import ghIco from '../../../assets/gh-ico.svg';

const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <Wrapper>
        <Socials>
          <SocialsItem>
            <SocialIco src={tgIco} alt={'telegram icon'} />
            <Button link="https://t.me/dashewski" target="_blank">
              Telegram
            </Button>
          </SocialsItem>
          {/* <SocialsItem>
            <SocialIco src={youtubeIco} alt={'youtube icon'} />
            <Button>YouTube</Button>
          </SocialsItem> */}
          <SocialsItem>
            <SocialIco src={tgIco} alt={'telegram icon'} />
            <Button link="https://t.me/dashewski" target="_blank">
              Ceo
            </Button>
          </SocialsItem>
          {/* <SocialsItem>
            <SocialIco src={ghIco} alt={'github icon'} />
            <Button>Github</Button>
          </SocialsItem> */}
        </Socials>
      </Wrapper>
    </StyledContacts>
  );
};

export default Contacts;
