import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { uiPaths } from "../paths/uiPaths";
import { PublicLayout } from "../layouts/Public.layout";
import { AccessDeniedWhenLoggedIn } from "./helpers/AccessDeniedWhenLoggedIn";
import AuthLayout from "../layouts/Auth.layout";

const AppRoutes = () => {
  const HomePage = lazy(() => import("../pages/Home.page"));
  const AboutPage = lazy(() => import("../pages/AboutUs.page"));
  const ContactPage = lazy(() => import("../pages/Contact.page"));
  const ProductsPage = lazy(() => import("../pages/Product.page"));
  const ServicesPage = lazy(() => import("../pages/Service.page"));
  const ShopPage = lazy(() => import("../pages/Shop.page"));
  const LoginPage = lazy(() => import("../pages/Auth/Login"));
  const ForgetPasswordPage = lazy(() => import("../pages/Auth/ForgetPassword"));
  const ResetPasswordPage = lazy(() => import("../pages/Auth/ResetPassword"));
  const NotFound = lazy(() => import("../pages/NotFound.page"));

  const {
    About,
    Contact,
    Products,
    Services,
    Shop,
    Login,
    ForgetPassword,
    ResetPassword,
  } = uiPaths;
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path={About} element={<AboutPage />} />
        <Route path={Contact} element={<ContactPage />} />
        <Route path={Services} element={<ServicesPage />} />
        <Route path={Products} element={<ProductsPage />} />
        <Route path={Shop} element={<ShopPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AccessDeniedWhenLoggedIn />}>
        <Route element={<AuthLayout />}>
          <Route path={Login} element={<LoginPage />} />
          <Route path={ForgetPassword} element={<ForgetPasswordPage />} />
          <Route path={ResetPassword} element={<ResetPasswordPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
