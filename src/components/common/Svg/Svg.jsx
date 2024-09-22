import { StyledSvg } from "./Svg.styled";

const Svg = ({
  p,
  t,
  l,
  r,
  b,
  z,

  w_m,
  h_m,
  w_t,
  h_t,
  w_d,
  h_d,

  mg_t_m,
  mg_t_t,
  mg_t_d,

  mg_r_m,
  mg_r_t,
  mg_r_d,

  mg_b_m,
  mg_b_t,
  mg_b_d,

  mg_l_m,
  mg_l_t,
  mg_l_d,

  c,
  s,

  style,

  children,
}) => {
  return (
    <StyledSvg
      p={p}
      t={t}
      l={l}
      r={r}
      b={b}
      z={z}
      w_m={w_m}
      h_m={h_m}
      w_t={w_t}
      h_t={h_t}
      w_d={w_d}
      h_d={h_d}
      mg_t_m={mg_t_m}
      mg_t_t={mg_t_t}
      mg_t_d={mg_t_d}
      mg_r_m={mg_r_m}
      mg_r_t={mg_r_t}
      mg_r_d={mg_r_d}
      mg_b_m={mg_b_m}
      mg_b_t={mg_b_t}
      mg_b_d={mg_b_d}
      mg_l_m={mg_l_m}
      mg_l_t={mg_l_t}
      mg_l_d={mg_l_d}
      c={c}
      s={s}
      style={style}
    >
      {children}
    </StyledSvg>
  );
};

export default Svg;
