import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Text from '../../ui/text/text';
import { Logo } from '../../ui/logo/logo';
import Image from '../../../elements/image';

const StyledAboutUs = styled.div`
  position: relative;
  padding: 51px 24px 51px;
  display: flex;
  flex-direction: column;
  gap: 145px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 78px 0 135px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    max-width: 498px;
    gap: 47px;
  }
`;

const DescriptionText = styled(Text)`
  color: ${(props) => props.theme.altColor};
  font-size: 12px;
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeightDefault};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    max-width: 417px;
    font-size: 16px;
  }
`;

const Bio = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.altColor};
  padding: 18px 15px 34px 19px;
  margin-left: 19px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 21px 26px 31px 231px;
  }
`;

const BioLogo = styled(Logo)`
  margin-bottom: 43px;
  margin-left: auto;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: 101px;
    height: 60px;
  }
`;

const BioPhoto = styled(Image)`
  position: absolute;
  top: -125px;
  left: -19px;
  width: 200px;
  height: 200px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: 270px;
    height: 270px;
    top: 0;
    bottom: 0;
    margin: auto;
    left: -66px;
  }
`;

const BioTitle = styled(Title)`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 7px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 20px;
    margin-bottom: 9px;
  }
`;

const BioText = styled(Text)`
  margin-bottom: 26px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    margin-bottom: 33px;
  }
`;

export {
  StyledAboutUs,
  Description,
  DescriptionText,
  Bio,
  BioLogo,
  BioTitle,
  BioText,
  BioPhoto,
};
