import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import MovieList from "../components/MovieList";
import { Box, CircularProgress, Container } from "@mui/material";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const valueQuery = searchParams.get("query");

  useEffect(() => {
    if (!valueQuery) return;
    const getSearchQuery = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          `search/movie?query=${valueQuery}&api_key=${API_KEY}`
        );
        setSearchQuery(res.data.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getSearchQuery();
  }, [valueQuery]);

  return (
    <Container maxWidth="auto">
      {loading ? (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        </div>
      ) : searchQuery.length ? (
        <MovieList movies={searchQuery} />
      ) : (
        <div>No movies found</div>
      )}
    </Container>
  );
};

export default SearchPage;
