// src/services/profileService/profileService.js
import { env } from "../../utils/env";

const API_BASE = env.VITE_API_BASE;

export const fetchUserProfile = async (token) => {
  const res = await fetch(`${API_BASE}/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    if (res.status === 401) {
      throw new Error("Сессия истекла. Пожалуйста, войдите снова.");
    }
    throw new Error(err.message || "Не удалось загрузить профиль");
  }

  return res.json();
};