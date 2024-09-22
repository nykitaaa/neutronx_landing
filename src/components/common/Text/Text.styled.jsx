import styled from "@emotion/styled";

export const StyledText = styled.p`
  align-self: ${({ al_s }) => (al_s ? al_s : "")};
  margin-top: ${({ mg_t }) => (mg_t ? `${mg_t}px` : "")};
  margin-right: ${({ mg_r }) => (mg_r ? `${mg_r}px` : "")};
  margin-bottom: ${({ mg_b }) => (mg_b ? `${mg_b}px` : "")};
  margin-left: ${({ mg_l }) => (mg_l ? `${mg_l}px` : "")};

  font-family: ${({ fm }) =>
    fm ? `${fm}, sans-serif` : "Raleway, sans-serif"};
  font-size: ${({ fz }) => (fz ? `${fz}px` : "14px")};
  font-weight: ${({ fw }) => (fw ? fw : 400)};
  line-height: 120%;
  text-transform: ${({ tr }) => (tr ? tr : "")};

  color: ${({ c }) => {
    return `var(--text-${c}-color)`;
  }};
`;
