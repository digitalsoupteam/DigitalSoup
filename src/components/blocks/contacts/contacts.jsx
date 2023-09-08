import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import Button from '../../ui/button/button';
import SocialIco from '../../ui/social-ico/social-ico';
import { StyledContacts, Socials, SocialsItem } from './styled';
import tgIco from '../../../assets/tg-ico.svg';
// import youtubeIco from '../../../assets/youtube-ico.svg';
import ghIco from '../../../assets/gh-ico.svg';
import figmaIco from '../../../assets/figma-ico.svg';

const Contacts = ({ links }) => {
  const projectLinkGithub = links ? links.github : null;
  const projectLinkFigma = links ? links.figma : null;
  return (
    <StyledContacts id="contacts">
      <Wrapper>
        <Socials>
          {/* <SocialsItem>
            <SocialIco src={tgIco} alt={'telegram icon'} />
            <Button link="https://t.me/dashewski" target="_blank">
              Telegram
            </Button>
          </SocialsItem> */}
          {/* <SocialsItem>
            <SocialIco src={youtubeIco} alt={'youtube icon'} />
            <Button>YouTube</Button>
          </SocialsItem> */}
          {projectLinkGithub ? (
            <SocialsItem>
              <SocialIco src={ghIco} alt={'github icon'} />
              <Button link={links.github} target="_blank">
                Github
              </Button>
            </SocialsItem>
          ) : null}
          {projectLinkFigma ? (
            <SocialsItem>
              <SocialIco src={figmaIco} alt={'github icon'} />
              <Button link={links.figma} target="_blank">
                Figma
              </Button>
            </SocialsItem>
          ) : null}
          <SocialsItem>
            <SocialIco src={ghIco} alt={'github icon'} />
            <Button link="https://github.com/dashewski" target="_blank">
              Github
            </Button>
          </SocialsItem>
          {links ? null : (
            <SocialsItem>
              <SocialIco src={tgIco} alt={'telegram icon'} />
              <Button link="https://t.me/dashewski" target="_blank">
                Ceo
              </Button>
            </SocialsItem>
          )}
        </Socials>
      </Wrapper>
    </StyledContacts>
  );
};

export default Contacts;
