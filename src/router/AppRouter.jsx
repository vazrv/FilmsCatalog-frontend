// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, HomePage } from '../components';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Другие маршруты будут добавлены позже */}
                </Routes>
            </>
        </BrowserRouter>
    );
};