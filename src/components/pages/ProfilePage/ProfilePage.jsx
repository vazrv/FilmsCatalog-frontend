import { useQuery } from "@tanstack/react-query";
// src/components/pages/ProfilePage/ProfilePage.jsx
import React from "react";
import { fetchUserProfile } from "../../../services/profileService";
import { userStore } from "../../../stores/userStore";

export const ProfilePage = () => {
  const token = userStore((state) => state.token);
  const logout = userStore((state) => state.logout);

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchUserProfile(token),
    enabled: !!token,
  });

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Доступ запрещён</h1>
        <p className="text-gray-500">Пожалуйста, войдите в аккаунт.</p>
        <a href="/login" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Войти
        </a>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
        <h1 className="text-2xl font-bold text-red-600">Ошибка загрузки профиля</h1>
        <p className="text-red-500">{error.message}</p>
        <button type="button" onClick={() => logout()} className="mt-4 text-sm text-gray-500 underline">
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Header */}
        <div
          className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"
          style={{
            backgroundImage: user.backdrop_url ? `url(${user.backdrop_url})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Avatar + Info */}
        <div className="px-6 pb-6 -mt-16 relative z-10">
          <img
            src={user.avatar_url || "/default-avatar.png"}
            alt="Аватар"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />

          <h1 className="text-3xl font-bold text-gray-800 mt-4">{user.username}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-400">Зарегистрирован: {new Date(user.created_at).toLocaleDateString()}</p>

          {user.is_admin && (
            <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
              Администратор
            </span>
          )}

          <div className="mt-6 flex space-x-4">
            <button
              type="button"
              onClick={logout}
              className="px-5 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition"
            >
              Выйти
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 px-6 py-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-800">{user.favorites_count || 0}</p>
            <p className="text-sm text-gray-500">В избранном</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{user.reviews_count || 0}</p>
            <p className="text-sm text-gray-500">Рецензий</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{user.ratings_count || 0}</p>
            <p className="text-sm text-gray-500">Оценок</p>
          </div>
        </div>
      </div>
    </div>
  );
};
