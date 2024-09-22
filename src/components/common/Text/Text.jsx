import { StyledText } from "./Text.styled";

const Text = ({
  al_s,
  mg_t,
  mg_r,
  mg_b,
  mg_l,
  fm,
  fz,
  fw,
  tr,
  c,
  children,
}) => {
  return (
    <StyledText
      al_s={al_s}
      mg_t={mg_t}
      mg_r={mg_r}
      mg_b={mg_b}
      mg_l={mg_l}
      fm={fm}
      fz={fz}
      fw={fw}
      tr={tr}
      c={c}
    >
      {children}
    </StyledText>
  );
};

export default Text;
