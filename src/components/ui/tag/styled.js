import styled from 'styled-components';
import TextSpacing from '../text-spacing/text-spacing';

const StyledTag = styled(TextSpacing)`
  letter-spacing: 1.754px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.altColor};
  line-height: ${(props) => props.theme.lineHieghtDefault};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 14px;
    padding: 8px;
  }
`;

export { StyledTag };
