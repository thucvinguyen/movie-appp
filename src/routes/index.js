import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
// import AuthRequire from "./AuthRequire";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";
import GenresPage from "../pages/GenresPage";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <AuthRequire>
          <MainLayout />
          // </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
        <Route path="genre/:genreId" element={<GenresPage />} />
        <Route path="/mylist" />
        <Route path="/search/movie" element={<SearchPage />} />
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
