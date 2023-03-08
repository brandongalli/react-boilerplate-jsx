import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config/config";
import { postAPI } from "../utils/api";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children, tokenData }) => {
  const [tokens, setTokens] = useLocalStorage("tokens", tokenData);
  const navigate = useNavigate();

  const login = async (data) => {
    const tokens = await postAPI(`${BACKEND_URL}/api/token/`, data);
    setTokens(tokens);
    navigate("/", { replace: true });
  };

  const logout = () => {
    setTokens(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      tokens,
      login,
      logout
    }),
    [tokens]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
