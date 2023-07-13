import styled from 'styled-components';
import P from '../../../elements/p';
import Ul from '../../../elements/ul';
import { Title } from '../../ui/title/title';
import arrowLong from '../../../assets/arrow-long.svg';
import TextSpacing from '../../ui/text-spacing/text-spacing';

const StyledHowItWorks = styled.div`
  padding: 30px 0 58px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 132px 72px 150px;
    display: flex;
    flex-direction: column;
    gap: 87px;
  }
`;

const Intro = styled.div`
  text-align: center;
`;

const IntroTitle = styled(Title)`
  width: 233px;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: auto;
  }
`;

const IntroText = styled(TextSpacing)`
  margin-bottom: 21px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    margin-bottom: 28px;
  }
`;

const Circles = styled.div`
  position: relative;
  width: 335px;
  height: 348px;
  margin: 0 auto;
  margin-bottom: 62px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: 560px;
    height: 388px;
    margin-top: 87px;
  }
`;

const Steps = styled.div`
  padding: 0 23px 42px;
  background-image: url(${arrowLong});
  background-repeat: no-repeat;
  background-position: bottom left 10px;
  margin-bottom: 70px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 0;
    margin: 0;
    background-size: 100%;
    background-position: top 77px center;
  }
`;

const StepsList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
  margin-top: 27px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    margin-top: 87px;
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
  }
`;

const StepsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 6px;
  }
`;

const Count = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.88px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    letter-spacing: 3.84px;
    font-size: 16px;
  }
`;

const StepsText = styled(P)`
  font-weight: 500;
  font-size: 11px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 15px;
  }
`;

const Description = styled.div`
  width: 295px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: auto;
    display: grid;
    text-align: start;
    grid-template-columns: 380px 1fr;
    column-gap: 169px;
  }
`;

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    grid-row: span 2;
    text-align: start;
  }
`;

export {
  StyledHowItWorks,
  Intro,
  IntroTitle,
  IntroText,
  Circles,
  Steps,
  StepsList,
  StepsItem,
  Count,
  StepsText,
  Description,
  DescriptionText,
};
