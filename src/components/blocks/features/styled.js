import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledFeatures = styled.div`
  padding: 0;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 65px 30px 55px;
  }
`;

const FeaturesList = styled(Ul)`
  padding: 23px 9px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px 27px;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.basicWhite};
  border-bottom: 1px solid ${(props) => props.theme.basicWhite};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 37px 60px;
    gap: 31px 70px;
  }
`;

const FeatureItem = styled.li`
  font-size: 13px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  font-weight: ${(props) => (props.$weight ? props.$weight : '400')};
  letter-spacing: 2.55px;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 17px;
    letter-spacing: 3.4px;
  }
`;

export { StyledFeatures, FeaturesList, FeatureItem };
