import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledContacts = styled.div`
  padding: 0;
`;

const Socials = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 0 30px 65px;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 35px;
    padding: 0 200px 230px;
    justify-content: center;
  }
`;

const SocialsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 35px;
  }
`;

export { StyledContacts, Socials, SocialsItem };
