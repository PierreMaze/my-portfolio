import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/index";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-col" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
