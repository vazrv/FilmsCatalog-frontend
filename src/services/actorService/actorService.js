// src/services/actorService.js
import { fetchFromAPI } from '../api';

export const getTopActors = () => fetchFromAPI('/actors/top');