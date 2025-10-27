// src/services/filmService.js
import { fetchFromAPI } from '../api';

export const getPopularFilms = () => fetchFromAPI('/films/popular');