import { Title, TitleSize } from '../../ui/title/title';
import BackgroundCircle from '../../../elements/background';
import Wrapper from '../../layout/wrapper/wrapper';
import Button from '../../ui/button/button';
import {
  BackgroundBar,
  InnerContainer,
  CbContainer,
  StyledText,
} from './styled';

const ContactBar = () => {
  return (
    <BackgroundBar>
      <Wrapper>
        <InnerContainer>
          <Title size={TitleSize.BIG} as={'h2'}>
            More details?
          </Title>
          <CbContainer>
            <StyledText>Just write</StyledText>
            <Button simple={true} link="https://t.me/dashewski">
              Contact us
            </Button>
          </CbContainer>
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
  );
};

export default ContactBar;
