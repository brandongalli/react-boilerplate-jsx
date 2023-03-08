import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";

export const PublicLayout = () => {
  const { tokens } = useAuth();
  const outlet = useOutlet();

  if (tokens) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" }
        ]}
      />
      {outlet}
    </div>
  );
};
