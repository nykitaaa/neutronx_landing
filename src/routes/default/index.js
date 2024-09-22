import { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Rules = lazy(() => import("pages/Rules"));
const Contacts = lazy(() => import("pages/Contacts"));

const useDefaultRouter = () => {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/contacts" element={<Contacts />} />
    </>
  );
};

export default useDefaultRouter;
