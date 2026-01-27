import Testimonials from "@/features/landing/components/Testimonials";
import LandingLayout from "@/features/landing/layout/LandingLayout";
import Home from "@/features/landing/pages/Home";
import Hosting from "@/features/landing/pages/Hosting";
import Pricing from "@/features/landing/pages/Pricing";
import Services from "@/features/landing/pages/Services";
import Support from "@/features/landing/pages/Support";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="services" element={<Services />} />
          <Route path="support" element={<Support />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
