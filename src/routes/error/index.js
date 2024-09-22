import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Loader } from "components/common";

const Error = lazy(() => import("pages/Error"));

const useErrorRouter = () => {
  return (
    <Route
      path="*"
      element={
        <Suspense fallback={<Loader />}>
          <Error />
        </Suspense>
      }
    />
  );
};

export default useErrorRouter;
