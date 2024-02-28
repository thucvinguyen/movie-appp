import React from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function MovieDetails({ movieDetail }) {
  const { movieId } = useParams();
  return (
    <div>
      <Typography variant="h1">Movie Details with ID: {movieId}</Typography>

      {/* Render other movie details as needed */}
    </div>
  );
}

export default MovieDetails;
