import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    justify-content: flex-end;
  }
`;

const NavList = styled(Ul)`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 43px;
  margin: 0;

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
