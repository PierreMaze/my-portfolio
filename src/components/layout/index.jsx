import { Outlet } from "react-router-dom";
import { useScrollToTop } from "../../hooks";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
