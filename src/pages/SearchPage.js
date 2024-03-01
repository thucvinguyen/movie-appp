import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import MovieList from "../components/MovieList";
import SearchBar from "../layouts/SearchBar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { movieName } = useParams();

  useEffect(() => {
    const getSearchQuery = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          `search/movie?query=${movieName}&api_key=${API_KEY}`
        );
        setSearchQuery(res.data.results);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getSearchQuery();
  }, [movieName]);

  return (
    <>
      <SearchBar />
      {loading ? <div>Loading...</div> : <MovieList movies={searchQuery} />}
    </>
  );
};

export default HomePage;
