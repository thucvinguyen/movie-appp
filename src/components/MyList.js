import React from "react";
import { Typography } from "@mui/material";

function MyList({ selectedMovies }) {
  return (
    <div>
      <Typography variant="h5">My List</Typography>
      <ul>
        {selectedMovies.map((movie) => (
          <li key={movie.movieId}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyList;
