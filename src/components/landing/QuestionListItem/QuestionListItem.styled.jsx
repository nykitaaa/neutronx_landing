import styled from '@emotion/styled';
import { mq } from 'utils';

export const StyledQuestionItem = styled.li`
  padding: 16px 0;

  border-bottom: 1px solid #7f808d;
  cursor: pointer;
`;

export const StyledQuestionItemContentWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledQuestionItemTitle = styled.h3`
  font-weight: 500;
  line-height: 150%;

  color: #ffffff;

  ${mq.tablet} {
    font-size: 20px;
  }
`;

export const StyledQuestionItemTextWrp = styled.div`
  padding: 20px 0 0;
`;

export const StyledQuestionItemText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-align: justify;

  color: #ffffff;

  ${mq.tablet} {
    font-size: 16px;
  }
`;

export const StyledQuestionItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: none;
`;
