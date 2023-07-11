import styled from 'styled-components';
import Button from '../../ui/button/button';

const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  gap: 20px;
  min-height: 75px;
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    min-height: 148px;
    grid-template-columns: max-content 1fr max-content;
  }
`;

const HeaderCBButton = styled(Button)`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: inherit;
  }
`;

export { StyledHeader, HeaderCBButton };
