import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import MovieList from "../components/MovieList";
import { Container } from "@mui/material";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`/movie/popular?api_key=${API_KEY}`);
        setMovies(res.data.results);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovies();
  }, []);

  if (!auth.user) {
    navigate("/login");
    return null;
  }

  return (
    <Container maxWidth="auto">
      <div className="App">
        <MovieList movies={movies} />
      </div>
    </Container>
  );
}

export default HomePage;
