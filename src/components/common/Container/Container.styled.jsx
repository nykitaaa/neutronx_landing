import styled from '@emotion/styled';
import { mq } from 'utils';

export const StyledContainer = styled.div`
  position: relative;

  margin: 0px auto;

  ${mq.smallMobile} {
    width: 320px;
  }

  ${mq.mobile} {
    width: 390px;
  }

  ${mq.tablet} {
    width: 760px;
  }

  ${mq.desktop} {
    width: 1440px;
  }
`;
