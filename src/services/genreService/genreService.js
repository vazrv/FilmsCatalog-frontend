// src/services/genreService.js
import { fetchFromAPI } from '../api';

export const getAllGenres = () => fetchFromAPI('/genres');