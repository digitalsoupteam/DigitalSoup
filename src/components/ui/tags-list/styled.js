import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledTags = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 13px 10px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 13px 16px;
  }
`;

export { StyledTags };
