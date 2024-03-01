import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import MovieGenres from "../components/MovieGenres";

function GenresPage() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `genre/movie/list?api_key=${API_KEY}&language=en`
        );
        setMovieGenres(res.data.genres);
        setError("");
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!movieGenres) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <CircularProgress />
        <Typography variant="h5">Loading movie genres...</Typography>
      </Box>
    );
  }
  return (
    <>
      <MovieGenres movieGenres={movieGenres} />
    </>
  );
}

export default GenresPage;
