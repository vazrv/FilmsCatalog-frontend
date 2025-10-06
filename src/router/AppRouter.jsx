// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, HomePage, LoginPage, ProfilePage, RegisterPage } from '@components';


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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};