import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LandingLayout;
