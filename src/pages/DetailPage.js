import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MovieDetails from "../components/MovieDetails";

function DetailPage() {
  let { movieId } = useParams();
  const [loading, setLoading] = useState();
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiService.get(
          `movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
        );
        console.log(res.data);
        setMovieDetail(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <MovieDetails movieDetail={movieDetail} />
    </>
  );
}

export default DetailPage;
