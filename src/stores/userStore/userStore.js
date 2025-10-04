// src/stores/userStore.js
import { create } from "zustand";

export const userStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  user: null,

  login: (token, user) => {
    localStorage.setItem("token", token);
    set({ token, user });
  },

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },
}));
