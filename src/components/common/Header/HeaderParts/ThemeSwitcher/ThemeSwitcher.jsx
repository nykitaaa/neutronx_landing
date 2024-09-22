import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { default as ACTIONS_APP } from "services/redux/app/actions";
import { useApp } from "hooks";
import { Svg } from "components/common";
import sprite from "assets/images/sprite.svg";
import { StyledWrp, StyledSpan } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { theme } = useApp();

  const handleSwitcherClick = () => {
    if (theme === "dark") {
      dispatch(ACTIONS_APP.setTheme("light"));
    }

    if (theme === "light") {
      dispatch(ACTIONS_APP.setTheme("dark"));
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.dataset.theme = "dark";
    }

    if (theme === "light") {
      document.body.dataset.theme = "light";
    }
  }, [theme]);

  return (
    <StyledWrp onClick={handleSwitcherClick}>
      <Svg w_m="24" h_m="24" p="absolute" t="30" l="18" z="2" c="primary">
        <use href={`${sprite}#header-theme-switcher-light-bulb`}></use>
      </Svg>

      <Svg w_m="24" h_m="24" p="absolute" t="30" l="57" z="2" c="secondary">
        <use href={`${sprite}#header-theme-switcher-dark-bulb`}></use>
      </Svg>

      <StyledSpan
        style={{
          left: theme === "light" ? "6%" : "44%",
          transition: "all 250ms",
        }}
      ></StyledSpan>
    </StyledWrp>
  );
};

export default ThemeSwitcher;
