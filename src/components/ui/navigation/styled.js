import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    justify-content: flex-end;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 43px;
  padding: 28px 0;
  margin: 0 75px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 87px;
  }
`;

const NavItem = styled.li`
  color: ${(props) => props.theme.altColor};
`;

const Link = styled.a`
  color: inherit;
  font-size: 16px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  text-decoration: underline;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-decoration: none;
  }
`;

export { StyledNav, NavList, NavItem, Link };
