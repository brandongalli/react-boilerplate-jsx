import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    defer
  } from "react-router-dom";
  import { LoginPage } from "./pages/Login";
  import { HomePage } from "./pages/Home";
  import { SettingsPage } from "./pages/Settings";
  import { PrivateLayout } from "./components/PrivateLayout";
  import { PublicLayout } from "./components/PublicLayout";
  import "./index.css";
  import { AuthLayout } from "./components/AuthLayout";
  
  // ideally this would be an API call to server to get logged in user data
  
  const getUserData = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        const user = window.localStorage.getItem("user");
        resolve(user);
      }, 3000)
    );
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<AuthLayout />}
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
  
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>
    )
  );
  