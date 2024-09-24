import styled from "@emotion/styled";
import { mq } from "utils";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq.smallMobile} {
    padding: 15px 18px 0;
  }

  ${mq.mobile} {
    padding: 15px 36px 0;
  }

  ${mq.tablet} {
    padding: 25px 32px 0;
  }

  ${mq.desktop} {
    padding: 60px 124px 0;
  }
`;

export const StyledMobileMenu = styled(motion.div)`
  @media screen and (max-width: 1439px) {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column-reverse;
    width: 280px;
    padding: 24px;

    background: var(--background-primary-color);
    border-radius: 31px;
    border-top-right-radius: 0;
    box-shadow: 0px 0px 15px 0px rgba(209, 209, 209, 0.15);
  }

  ${mq.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 78%;
  }
`;

export const StyledMenuButton = styled.button`
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-left: 10px;

  background: #ffffff;
  border: 5px solid var(--border-mobile-menu-color);
  border-radius: 50%;

  ${mq.desktop} {
    display: none;
  }
`;
