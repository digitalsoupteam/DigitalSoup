import styled from 'styled-components';
import P from '../../../elements/p';

const TextSpacing = styled(P)`
  font-size: 9px;
  line-height: 170.4%;
  font-weight: 700;
  letter-spacing: 2.16px;
  text-transform: uppercase;
  text-align: inherit;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 12px;
    letter-spacing: 2.88px;
  }
`;

export default TextSpacing;
