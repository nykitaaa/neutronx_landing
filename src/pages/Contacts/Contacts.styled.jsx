import styled from "@emotion/styled";
import { mq } from "utils";

export const StyledSection = styled.section`
  padding: 60px 15px;

  ${mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 60px 20px;
  }

  ${mq.desktop} {
    padding: 40px 135px 100px;
  }
`;

export const StyledPrimaryTitle = styled.h1`
  margin-bottom: 60px;

  font-size: 38px;
  font-weight: 800;
  line-height: 106.667%;

  color: var(--text-primary-color);

  ${mq.tablet} {
    width: 450px;
    font-size: 75px;
    line-height: 106.667%;
  }

  ${mq.desktop} {
    margin-bottom: 12px;
    width: 739px;
  }
`;

export const StyledImg = styled.img`
  display: none;

  ${mq.tablet} {
    display: block;
    width: 266px;
    height: 266px;
  }
`;

export const StyledList = styled.ul`
  @media screen and (max-width: 759px) {
    margin-bottom: 60px;
  }

  ${mq.tablet} {
    margin-right: 94px;
  }

  ${mq.desktop} {
    margin-right: 168px;
  }
`;

export const StyledItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

export const StyledTextIconWrp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export const StyledText = styled.p`
  width: ${({ w_m }) => `${w_m}px`};

  font-weight: 600;
  line-height: 142.857%;

  color: var(--text-primary-color);

  ${mq.desktop} {
    width: ${({ w_d }) => `${w_d}px`};
  }
`;

export const StyledSecondaryTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  line-height: 166.667%;

  color: var(--text-primary-color);

  ${mq.desktop} {
    font-size: 40px;
    font-weight: 800;
    line-height: 200%;
  }
`;

export const StyledForm = styled.form`
  align-self: flex-end;
`;

export const StyledInputWrp = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  padding: 20px 160px 20px 60px;

  font-weight: 600;

  color: var(--text-primary-color);
  background: var(--background-secondary-color);
  border: none;
  outline: none;
  border-radius: 99px;

  &::placeholder {
    color: var(--text-primary-color);
  }

  width: 100%;

  ${mq.desktop} {
    width: 542px;
  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  top: 10%;
  right: 2%;

  width: 144px;
  padding: 14.5px 0;

  font-weight: 700;

  color: var(--button-primary-text-color);
  background: var(--button-primary-color);
  border: none;
  border-radius: 99px;

  ${mq.desktop} {
    right: 1%;
  }
`;
