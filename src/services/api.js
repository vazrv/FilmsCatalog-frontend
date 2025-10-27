// src/services/api.js
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

export const fetchFromAPI = async (endpoint) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Network error');
  }
  return res.json();
};