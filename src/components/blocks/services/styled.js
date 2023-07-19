import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Ul from '../../../elements/ul';
import P from '../../../elements/p';

const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 21px 51px;
  gap: 31px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 62px 255px 147px;
    gap: 55px;
  }
`;

const ServicesTitle = styled(Title)`
  padding-bottom: 2px;
  border-bottom: 1px solid ${(props) => props.theme.basicWhite};
  width: fit-content;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 170%;
  letter-spacing: 2.16px;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    letter-spacing: 2.88px;
    margin: 0 0 0 28px;
  }
`;

const ServicesList = styled(Ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 41px;
  margin-bottom: 24px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 0 28px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    gap: 55px 94px;
    margin: 0;
  }
`;

const ServicesItem = styled.li`
  display: flex;
  width: 180px;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-align: start;
    align-items: flex-start;
    width: auto;
  }
`;

const Text = styled(P)`
  color: ${(props) => props.theme.altColor};
  font-size: 11px;
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeightDefault};
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    text-align: start;
    font-size: 15px;
  }
`;

const CallBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  border: 1px solid ${(props) => props.theme.altColor};
  padding: 19px 21px;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 26px 28px;
    flex-direction: row;
    align-items: flex-end;
    gap: 110px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 19px;
    align-items: flex-start;
    text-align: start;
  }
`;

export {
  StyledServices,
  ServicesTitle,
  ServicesList,
  ServicesItem,
  Text,
  CallBack,
  TextWrapper,
};
