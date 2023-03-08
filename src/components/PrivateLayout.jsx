import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";

export const PrivateLayout = () => {
  const { tokens } = useAuth();
  const outlet = useOutlet();

  if (!tokens) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Settings", path: "/settings" }
        ]}
      />
      {outlet}
    </div>
  );
};
