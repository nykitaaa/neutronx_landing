import { StyledSphere } from "./Sphere.styled";

const Sphere = ({
  z,
  l_m,
  t_m,
  w_m,
  h_m,
  f_m,
  t_t,
  l_t,
  w_t,
  h_t,
  f_t,
  t_d,
  l_d,
  w_d,
  h_d,
  f_d,
}) => (
  <StyledSphere
    z={z}
    l_m={l_m}
    t_m={t_m}
    w_m={w_m}
    h_m={h_m}
    f_m={f_m}
    t_t={t_t}
    l_t={l_t}
    w_t={w_t}
    h_t={h_t}
    f_t={f_t}
    t_d={t_d}
    l_d={l_d}
    w_d={w_d}
    h_d={h_d}
    f_d={f_d}
  />
);

export default Sphere;
