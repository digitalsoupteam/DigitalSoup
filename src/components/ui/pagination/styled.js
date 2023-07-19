import styled from 'styled-components';

const StyledPAgintaion = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 7px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    position: absolute;
    bottom: 78px;
    right: 0;
    padding-right: 20px;
    gap: 5px;
  }
`;

const PaginationButton = styled.button`
  color: ${(props) => props.theme.basicWhite};
  background-color: transparent;
  border: none;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 3.758px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  padding: 5px 2px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 8px 4px;
    font-size: 30px;
    letter-spacing: 6px;
  }
`;

const Count = styled.span`
  font-size: 10px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  font-weight: 700;
  letter-spacing: 2px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${(props) => props.theme.basicWhite};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`;

export { StyledPAgintaion, PaginationButton, Count };
