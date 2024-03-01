import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { Box, CircularProgress } from "@mui/material";

function DetailPage() {
  let { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
        );
        setMovieDetail(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  // Check if movieDetail is null before rendering MovieDetails
  if (!movieDetail) {
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
        <Typography variant="h5">Loading movie details...</Typography>
      </Box>
    );
  }
  return (
    <>
      <MovieDetails movieDetail={movieDetail} />
    </>
  );
}

export default DetailPage;
