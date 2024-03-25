import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import Button from '../../ui/button/button';
import SocialIco from '../../ui/social-ico/social-ico';
import { StyledContacts, Socials, SocialsItem } from './styled';
import tgIco from '../../../assets/tg-ico.svg';
import ghIco from '../../../assets/gh-ico.svg';
import figmaIco from '../../../assets/figma-ico.svg';
import CyberscopeIco from '../../../assets/cyberscope-ico.svg';
import Gdrive from '../../../assets/gdrive-ico.svg';

const icons = {
  telgram: tgIco,
  github: ghIco,
  figma: figmaIco,
  cyberscope: CyberscopeIco,
  gdrive: Gdrive,
};

const Contacts = ({ links }) => {
  return (
    <StyledContacts id="contacts">
      <Wrapper>
        <Socials>
          {links.map((item, index) => {
            return (
              <SocialsItem key={index}>
                <SocialIco src={icons[item.icon]} alt={`${item.icon} icon`} />
                <Button link={item.link} target="_blank">
                  {item.text}
                </Button>
              </SocialsItem>
            );
          })}
        </Socials>
      </Wrapper>
    </StyledContacts>
  );
};

export default Contacts;
