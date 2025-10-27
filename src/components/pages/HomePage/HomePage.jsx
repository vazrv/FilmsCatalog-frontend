// src/pages/HomePage/HomePage.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularFilms } from "@services/filmService";
import { getAllGenres } from "@services/genreService";
import { getTopActors } from "@services/actorService";

export const HomePage = () => {
  const {
    data: films = [],
    isLoading: filmsLoading,
    error: filmsError,
  } = useQuery({ queryKey: ['popularFilms'], queryFn: getPopularFilms });

  const {
    data: genres = [],
    isLoading: genresLoading,
  } = useQuery({ queryKey: ['genres'], queryFn: getAllGenres });

  const {
    data: actors = [],
    isLoading: actorsLoading,
  } = useQuery({ queryKey: ['topActos'], queryFn: getTopActors });

  if (filmsLoading || genresLoading || actorsLoading) {
    return <div className="flex items-center justify-center min-h-screen">Загрузка...</div>;
  }

  if (filmsError) {
    return <div className="text-red-600 p-4">Ошибка: {filmsError.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Добро пожаловать в FilmsCatalog</h1>
          <p className="text-gray-500 mt-1">Найдите свой следующий любимый фильм</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Популярные фильмы */}
        {/* Популярные фильмы */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Популярные фильмы</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {films.map((film) => (
              <div key={film.id} className="group cursor-pointer">
                <div className="aspect-[2/3] w-full rounded-lg shadow-md group-hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={film.poster_url}
                    alt={film.title_ru}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-2 text-sm font-medium text-center text-gray-700 truncate">{film.title_ru}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Жанры */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Жанры</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.id}
                className="px-5 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition text-sm font-semibold"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </section>

        {/* Топ актёры */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Топ актёры</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {actors.map((actor) => (
              <div key={actor.id} className="text-center group cursor-pointer">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img
                    src={actor.photo_url}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 truncate">{actor.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};