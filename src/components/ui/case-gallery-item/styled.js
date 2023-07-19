import styled from 'styled-components';
import { Title } from '../title/title';
import Text from '../../ui/text/text';

const GalleryItem = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 20px;

    &:nth-child(2n) {
      position: relative;
      top: 100px;
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: 100%;
    height: 440px;
  }
`;

const ItemTitle = styled(Title)`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.4px;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 14px;
    letter-spacing: 3.36px;
  }
`;

const ItemText = styled(Text)`
  padding-right: 48px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding-right: 89px;
  }
`;

export { GalleryItem, StyledImage, ItemTitle, ItemText };
