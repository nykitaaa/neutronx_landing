import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { default as ACTIONS_APP } from "services/redux/app/actions";
import i18n from "services/i18n";
import { useDefaultRouter, useErrorRouter } from "routes";
import { SharedLayout } from "components/common";

export const App = () => {
  const dispatch = useDispatch();
  const lang = JSON.parse(localStorage.getItem("language"));
  const defaultRouter = useDefaultRouter();
  const errorRouter = useErrorRouter();

  useEffect(() => {
    dispatch(ACTIONS_APP.setScreenWidth(window.innerWidth));

    const handleWidthSet = (e) => {
      dispatch(ACTIONS_APP.setScreenWidth(e.target.innerWidth));
    };

    window.addEventListener("resize", handleWidthSet);

    return () => {
      window.removeEventListener("resize", handleWidthSet);
    };
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {defaultRouter}
      </Route>
      {errorRouter}
    </Routes>
  );
};
