import { createAction } from "@reduxjs/toolkit";

const setTheme = createAction("app/setTheme");
const setScreenWidth = createAction("app/setInnerWidth");

const ACTIONS = { setTheme, setScreenWidth };

export default ACTIONS;
