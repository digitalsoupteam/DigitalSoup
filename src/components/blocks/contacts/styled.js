import styled from 'styled-components';
import bgArrow from '../../../assets/line-arrow-ico.svg';
import Ul from '../../../elements/ul';

const StyledContacts = styled.div`
  padding: 58px 0 0;
`;

const BackgroundBar = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const InnerContainer = styled.div`
  position: relative;
  padding: 15px 0 27px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  background-image: url(${bgArrow});
  background-repeat: no-repeat;
  background-position: top 70px center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-align: start;
    padding: 58px 132px 57px 113px;
    display: grid;
    grid-template-columns: max-content 312px;
    background-position: center left 430px;
    gap: 228px;
  }
`;

const Socials = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 50px 30px 100px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 35px;
    grid-template-columns: repeat(4, 1fr);
    padding: 100px 200px 80px;
    justify-content: center;
  }
`;

const SocialsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 35px;
  }
`;

export { StyledContacts, BackgroundBar, InnerContainer, Socials, SocialsItem };
