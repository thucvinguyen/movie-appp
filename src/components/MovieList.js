import React from "react";
import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";

function MovieList({ movies }) {
  return (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid item key={movie.movieId} xs={12} md={6} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
