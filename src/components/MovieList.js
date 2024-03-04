import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Grid, Pagination } from "@mui/material";

function MovieList({ movies }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={3}>
        {currentMovies.map((movie, index) => (
          <Grid item key={movie.movieId} xs={12} md={6} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(movies.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 3, display: "flex", justifyContent: "center" }}
      />
    </>
  );
}

export default MovieList;
