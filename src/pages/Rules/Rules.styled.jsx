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

export const StyledWrp = styled.div`
  @media screen and (max-width: 759px) {
    margin-bottom: 40px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPrimaryTitle = styled.h1`
  margin-bottom: 12px;

  font-size: 38px;
  font-weight: 800;
  line-height: 131.579%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    font-size: 75px;
    line-height: 106.667%;
  }
`;

export const StyledInfoBlock = styled.div`
  display: inline-flex;
  align-items: center;

  padding: 10px 18px 10px 22px;

  background: var(--background-secondary-color);

  border-radius: 99px;

  ${mq.tablet} {
    padding: 12px 18px 12px 22px;
  }
`;

export const StyledImg = styled.img`
  display: none;

  ${mq.tablet} {
    display: block;
    width: 318px;
    height: 351px;
  }
`;

export const StyledSecondaryTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 800;
  line-height: 166.667%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 42px;

    font-size: 40px;
    font-weight: 800;
    line-height: 200%;
  }
`;

export const StyledText = styled.p`
  @media screen and (max-width: 759px) {
    margin-bottom: ${({ mg_b_m }) => `${mg_b_m}px`};
  }

  margin-bottom: ${({ mg_b_d }) => `${mg_b_d}px`};

  font-weight: 600;
  line-height: 142.857%;

  color: var(--text-primary-color);
`;

export const StyledList = styled.ul``;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledDot = styled.div`
  width: 4px;
  height: 4px;
  margin: 0 8px;

  background: var(--text-primary-color);
  border-radius: 50%;
`;
