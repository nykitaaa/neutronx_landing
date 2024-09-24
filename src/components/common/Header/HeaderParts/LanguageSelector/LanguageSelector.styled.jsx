import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledWrp = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;

  background: transparent;
  border: 5px solid var(--background-secondary-color);
  border-radius: 99px;
  cursor: pointer;
`;

export const StyledBtn = styled.button`
  margin-left: 4px;

  background: transparent;
  border: none;
`;

export const StyledList = styled(motion.ul)`
  position: absolute;
  top: 120%;
  left: 0%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  width: 100%;

  background: var(--background-secondary-color);
  border-radius: 12px;
`;

export const StyledItem = styled(motion.li)`
  padding: 4px 0;

  text-align: center;
  user-select: none;
`;
