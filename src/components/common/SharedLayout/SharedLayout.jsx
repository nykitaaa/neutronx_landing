import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader, Header, Footer } from "components/common";

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
