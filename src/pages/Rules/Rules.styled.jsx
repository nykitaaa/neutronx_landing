import styled from "@emotion/styled";
import { mq } from "utils";

export const StyledSection = styled.section`
  ${mq.smallMobile} {
    padding: 60px 18px;
  }

  ${mq.mobile} {
    padding: 60px 38px;
  }

  ${mq.tablet} {
    padding: 60px 32px;
  }

  ${mq.desktop} {
    padding: 60px 124px 80px;
  }
`;

export const StyledTopWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 12px;

  font-size: 30px;
  font-weight: 600;
  line-height: 150%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 16px;

    font-size: 40px;
  }

  ${mq.desktop} {
    font-size: 48px;
  }
`;

export const StyledInfoBlock = styled.div`
  display: inline-flex;
  align-items: center;

  margin-bottom: 12px;
  padding: 10px 18px;

  background-image: var(--background-rules-info-area-color),
    var(--border-rules-info-area-color);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: 1px solid #645c70;
  border: double 1px transparent;
  border-radius: 99px;

  ${mq.tablet} {
    margin-bottom: 16px;
    padding: 12px 22px;
  }

  ${mq.desktop} {
    margin-bottom: 0;
  }
`;

export const StyledImg = styled.img`
  display: none;

  ${mq.desktop} {
    display: block;
    width: 660px;
    height: 450px;
  }
`;

export const StyledParagraphTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 32px;
  font-weight: 600;
  line-height: 150%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 30px;

    font-size: 36px;
  }

  ${mq.desktop} {
    font-size: 40px;
  }
`;

export const StyledText = styled.p`
  width: 100%;
  margin-bottom: ${({ mg_b_m }) => `${mg_b_m}px`};

  font-weight: 600;
  font-size: 16px;

  color: var(--text-primary-color);

  ${mq.desktop} {
    margin-bottom: ${({ mg_b_d }) => `${mg_b_d}px`};
  }
`;

export const StyledList = styled.ul``;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledDot = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  margin: 0 8px;

  background: var(--text-primary-color);
  border-radius: 50%;
`;
