import styled from 'styled-components';
import bgArrow from '../../../assets/jagged-arrow.svg';
import TextSpacing from '../../ui/text-spacing/text-spacing';

const StyledIdea = styled.div`
  position: relative;
  padding: 51px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  text-align: center;
  background-image: url(${bgArrow});
  background-repeat: no-repeat;
  background-position: top 120px center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-align: start;
    padding: 134px 145px 132px;
    display: grid;
    align-items: start;
    grid-template-columns: 2fr 1fr;
    background-position: top 180px left 470px;
    background-size: 253px;
  }
`;

const IdeaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 16px 0 12px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    justify-self: end;
    width: 250px;
    gap: 67px;
    align-items: flex-start;
  }
`;

const Text = styled(TextSpacing)`
  margin-top: 112px;
  width: 195px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-align: left;
    width: auto;
    padding: 0;
    margin: 0;
  }
`;

export { StyledIdea, IdeaContainer, Text };
