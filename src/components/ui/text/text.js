import styled from 'styled-components';
import P from '../../../elements/p';

const Text = styled(P)`
  color: ${(props) => props.theme.altColor};
  font-size: 11px;
  font-weight: 500;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 15px;
  }
`;

export default Text;
