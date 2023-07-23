import styled from 'styled-components';

const StyledGallery = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: ${(props) => (props.isException ? '89px' : null)};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 140px;
    padding-bottom: 100px;
    margin-bottom: ${(props) => (props.isException ? '200px' : null)};
  }
`;

export { StyledGallery };
