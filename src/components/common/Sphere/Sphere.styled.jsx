import styled from "@emotion/styled";
import { mq } from "utils";

export const StyledSphere = styled.div`
  position: absolute;
  z-index: ${({ z }) => (z ? z : "")};

  pointer-events: none;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  top: ${({ t_m }) => (t_m ? `${t_m}%` : "")};
  left: ${({ l_m }) => (l_m ? `${l_m}%` : "")};

  width: ${({ w_m }) => (w_m ? `${w_m}px` : "")};
  height: ${({ h_m }) => (h_m ? `${h_m}px` : "")};

  border-radius: ${({ br_m }) => (br_m ? `${br_m}px` : "")};
  background: var(--background-sphere-color);
  filter: ${({ f_m }) => (f_m ? `blur(${f_m}px)` : "")};

  ${mq.tablet} {
    top: ${({ t_t }) => (t_t ? `${t_t}%` : "")};
    left: ${({ l_t }) => (l_t ? `${l_t}%` : "")};

    width: ${({ w_t }) => (w_t ? `${w_t}px` : "")};
    height: ${({ h_t }) => (h_t ? `${h_t}px` : "")};

    border-radius: ${({ br_t }) => (br_t ? `${br_t}px` : "")};
    background: var(--background-sphere-color);
    filter: ${({ f_t }) => (f_t ? `blur(${f_t}px)` : "")};
  }

  ${mq.desktop} {
    top: ${({ t_d }) => (t_d ? `${t_d}%` : "")};
    left: ${({ l_d }) => (l_d ? `${l_d}%` : "")};

    width: ${({ w_d }) => (w_d ? `${w_d}px` : "")};
    height: ${({ h_d }) => (h_d ? `${h_d}px` : "")};

    border-radius: ${({ br_d }) => (br_d ? `${br_d}px` : "")};
    background: var(--background-sphere-color);
    filter: ${({ f_d }) => (f_d ? `blur(${f_d}px)` : "")};
  }
`;
