import styled from 'styled-components';
import bgArrow from '../../../assets/line-arrow-ico.svg';
import Text from '../../ui/text/text';

const BackgroundBar = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  margin-bottom: 100px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    margin-bottom: 210px;
  }
`;

const InnerContainer = styled.div`
  position: relative;
  padding: 15px 0 27px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => (props.isCustomText ? '40px' : '36px')};
  text-align: center;
  background-image: url(${bgArrow});
  background-repeat: no-repeat;
  background-position: top 70px center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-align: start;
    padding: 58px 132px 57px 113px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: ${(props) =>
      props.isCustomText
        ? 'max-content 312px'
        : 'max-content max-content max-content'};
    background-position: ${(props) =>
      props.isCustomText ? 'center left 430px' : 'center left 674px'};
    gap: 104px;
  }
`;

const CbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    flex-direction: row;
    gap: 200px;
  }
`;

const StyledText = styled(Text)`
  font-size: 21px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 28px;
  }
`;

export { BackgroundBar, InnerContainer, CbContainer, StyledText };
