import styled from "@emotion/styled";
import { mq } from "utils";

export const StyledSvg = styled.svg`
  position: ${({ p }) => (p ? p : "")};
  top: ${({ t }) => (t ? `${t}%` : "")};
  left: ${({ l }) => (l ? `${l}%` : "")};
  right: ${({ r }) => (r ? `${r}%` : "")};
  bottom: ${({ b }) => (b ? `${b}%` : "")};
  z-index: ${({ z }) => (z ? z : "")};

  width: ${({ w_m }) => (w_m ? `${w_m}px` : "")};
  height: ${({ h_m }) => (h_m ? `${h_m}px` : "")};
  margin-top: ${({ mg_t_m }) => (mg_t_m ? `${mg_t_m}px` : "")};
  margin-right: ${({ mg_r_m }) => (mg_r_m ? `${mg_r_m}px` : "")};
  margin-left: ${({ mg_l_m }) => (mg_l_m ? `${mg_l_m}px` : "")};
  margin-bottom: ${({ mg_b_m }) => (mg_b_m ? `${mg_b_m}px` : "")};

  fill: ${({ c }) => {
    if (c === "primary") {
      return `var(--svg-primary-color)`;
    }

    if (c === "secondary") {
      return `var(--svg-secondary-color)`;
    }

    if (c === "reverse") {
      return `var(--svg-reverse-color)`;
    }

    return c;
  }};
  stroke: ${({ s }) => {
    if (s === "secondary") {
      return `var(--svg-secondary-color)`;
    }

    return "";
  }};

  ${mq.tablet} {
    width: ${({ w_t }) => (w_t ? `${w_t}px` : "")};
    height: ${({ h_t }) => (h_t ? `${h_t}px` : "")};
    margin-top: ${({ mg_t_t }) => (mg_t_t ? `${mg_t_t}px` : "")};
    margin-right: ${({ mg_r_t }) => (mg_r_t ? `${mg_r_t}px` : "")};
    margin-bottom: ${({ mg_b_t }) => (mg_b_t ? `${mg_b_t}px` : "")};
    margin-left: ${({ mg_l_t }) => (mg_l_t ? `${mg_l_t}px` : "")};
  }

  ${mq.desktop} {
    width: ${({ w_d }) => (w_d ? `${w_d}px` : "")};
    height: ${({ h_d }) => (h_d ? `${h_d}px` : "")};
    margin-top: ${({ mg_t_d }) => (mg_t_d ? `${mg_t_d}px` : "")};
    margin-right: ${({ mg_r_d }) => (mg_r_d ? `${mg_r_d}px` : "")};
    margin-bottom: ${({ mg_b_d }) => (mg_b_d ? `${mg_b_d}px` : "")};
    margin-left: ${({ mg_l_d }) => (mg_l_d ? `${mg_l_d}px` : "")};
  }
`;
