import styled from "@emotion/styled";
import { mq } from "utils";

export const StyledMainContentWrp = styled.div`
  border-top: 1px solid var(--border-footer-color);
`;

export const StyledMainList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 380px;
  margin: 0 auto;
  padding: 48px 15px 18px;

  ${mq.tablet} {
    justify-content: space-between;
    max-width: 768px;
    padding: 75px 55px 120px;
  }

  ${mq.desktop} {
    flex-wrap: nowrap;
    max-width: 1440px;
    padding: 50px 124px 34px;
  }
`;

export const StyledMainItem = styled.li`
  @media screen and (max-width: 759px) {
    :nth-of-type(1) {
      order: 2;

      margin-bottom: 55px;
    }

    :nth-of-type(2) {
      order: 3;
    }

    :nth-of-type(3) {
      order: 1;

      width: 35.4%;
      margin-bottom: 60px;
    }
  }

  :last-child {
    @media screen and (max-width: 1439px) {
      order: -1;
    }

    ${mq.tablet} and (max-width: 1439px) {
      width: 100%;
      margin-bottom: 120px;
    }
  }
`;

export const StyledMainTitle = styled.h3`
  margin-bottom: 18px;

  font-size: 18px;
  font-weight: 600;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 25px;

    font-size: 20px;
    font-weight: 700;
  }

  ${mq.desktop} {
    margin-bottom: 16px;
  }
`;

export const StyledInsertedList = styled.ul``;

export const StyledInsertedItem = styled.li`
  :not(:last-child) {
    margin-bottom: 15px;

    ${mq.tablet} {
      margin-bottom: 20px;
    }

    ${mq.desktop} {
      margin-bottom: 15px;
    }
  }
`;

export const StyledInsertedLink = styled.a`
  font-size: 15px;

  color: var(--text-secondary-color);

  ${mq.tablet} {
    font-size: 17px;
  }

  ${mq.desktop} {
    font-size: 16px;
  }
`;

export const StyledIconsList = styled.ul`
  display: flex;
  align-self: flex-end;
`;

export const StyledIconsItem = styled.li`
  margin-right: 12px;

  :not(:last-child) {
    ${mq.tablet} {
      margin-right: 15px;
    }

    ${mq.desktop} {
      margin-right: 13px;
    }
  }
`;

export const StyledSecondaryContentWrp = styled.div`
  text-align: center;

  border-top: 1px solid var(--border-footer-color);
`;

export const StyledSecondaryList = styled.ul`
  position: relative;
  max-width: 380px;
  margin: 0 auto;
  padding: 35px 0px 27px;

  ${mq.tablet} {
    position: static;

    display: flex;
    justify-content: space-between;
    max-width: 768px;
    padding: 40px 55px 43px;
  }

  ${mq.desktop} {
    max-width: 1440px;
    padding: 34px 124px 30px;
  }
`;

export const StyledSecondaryItem = styled.li`
  @media screen and (max-width: 759px) {
    :last-child {
      position: absolute;
      top: -65px;
      right: 25px;
    }

    :nth-of-type(2) {
      position: absolute;
      top: -65px;
      left: 15px;
    }
  }
`;

export const StyledSecondaryText = styled.p`
  font-size: 14px;

  color: var(--text-secondary-color);
`;

export const StyledSecondaryLink = styled.a`
  font-size: 14px;

  color: var(--text-secondary-color);
`;
