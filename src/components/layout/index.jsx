import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/index";

const Layout = () => {
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
