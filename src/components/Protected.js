import { Navigate, Outlet } from "react-router-dom";

function Protected({ user, children }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
}

export default Protected;
