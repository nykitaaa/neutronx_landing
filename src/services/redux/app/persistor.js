import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./slice";

const persistConfig = {
  key: "app",
  storage,
  whitelist: ["theme"],
};

const persistedAppReducer = persistReducer(persistConfig, appReducer);

export default persistedAppReducer;
