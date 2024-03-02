import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import MovieList from "../components/MovieList";
import { Container, CircularProgress } from "@mui/material";

function GenresPage() {
  const { genreId } = useParams();
  const [genreName, setGenreName] = useState("");
  const [movieGenres, setMovieGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          `genre/movie/list?api_key=${API_KEY}&language=en`
        );
        const genres = res.data.genres;
        const selectedGenre = genres.find(
          (genre) => genre.id === parseInt(genreId)
        );
        if (selectedGenre) {
          setGenreName(selectedGenre.name);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [genreId]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          `discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
        );
        setMovieGenres(res.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [genreId]);

  return (
    <Container maxWidth="auto">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <h1>{genreName}</h1>
          <div>
            {movieGenres.map((movie) => (
              <MovieList key={movie.id} movies={movieGenres} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}

export default GenresPage;
