// src/components/layout/Header/Header.jsx
import React from 'react';

export const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800">FilmsCatalog</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className="text-gray-600 hover:text-gray-900 transition">
                                Главная
                            </a>
                        </li>
                        <li>
                            <a href="/search" className="text-gray-600 hover:text-gray-900 transition">
                                Поиск
                            </a>
                        </li>
                        <li>
                            <a href="/profile" className="text-gray-600 hover:text-gray-900 transition">
                                Профиль
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
