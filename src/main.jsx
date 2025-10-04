import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Обязательно импортируем ReactDOM
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

// Создаём корень и рендерим приложение
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
