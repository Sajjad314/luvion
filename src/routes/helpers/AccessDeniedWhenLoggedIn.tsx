import { Navigate, Outlet } from "react-router-dom";
import { uiPaths } from "../../paths/uiPaths";

export const AccessDeniedWhenLoggedIn = () => {
  const isLoggedIn = false;

  if (isLoggedIn) return <Navigate to={uiPaths.Home} replace={true} />;

  return <Outlet />;
};
