// src/router/AppRouter.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, HomePage, ProfilePage } from "../components";

export const AppRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Другие маршруты */}
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
