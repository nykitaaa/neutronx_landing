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
    padding: 120px 124px 80px;
  }
`;

export const StyledTopWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 12px;

  font-size: 30px;
  font-weight: 600;
  line-height: 150%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    margin-bottom: 0;

    font-size: 40px;
  }

  ${mq.desktop} {
    font-size: 48px;
  }
`;

export const StyledImgWrp = styled.div`
  position: relative;
`;

export const StyledImg = styled.img`
  display: none;

  ${mq.desktop} {
    display: block;
    width: 600px;
    height: 300px;
  }
`;

export const StyledList = styled.ul`
  ${mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -30px 0;
  }
`;

export const StyledItem = styled.li`
  &:not(:last-child) {
    @media screen and (max-width: 759px) {
      margin-bottom: 30px;
    }
  }

  ${mq.tablet} {
    width: 40%;

    margin: 30px 0;
  }
`;

export const StyledInputWrp = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  padding: 18px 100px 18px 48px;

  width: 100%;

  font-weight: 600;

  color: var(--text-primary-color);
  background: var(--background-secondary-color);
  border: none;
  border-radius: 99px;
  outline: none;

  &::placeholder {
    color: var(--text-primary-color);
  }

  ${mq.tablet} {
    padding: 18px 100px 18px 48px;
  }

  ${mq.desktop} {
    padding: 18px 160px 18px 60px;
  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  top: 8%;
  right: 1%;

  padding: 14px 12px;

  font-weight: 700;

  color: var(--button-primary-text-color);
  background: var(--button-primary-color);
  border: none;
  border-radius: 99px;

  ${mq.desktop} {
    width: 144px;
  }
`;
