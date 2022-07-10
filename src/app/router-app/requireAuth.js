import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  console.log(auth);

  if (!auth.isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
