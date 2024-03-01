import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import MovieList from "../components/MovieList";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const valueQuery = searchParams.get("query");
  console.log(valueQuery);

  useEffect(() => {
    if (!valueQuery) return;
    const getSearchQuery = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          `search/movie?query=${valueQuery}&api_key=${API_KEY}`
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
  }, [valueQuery]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : searchQuery.length ? (
        <MovieList movies={searchQuery} />
      ) : (
        <div>No movies found</div>
      )}
    </>
  );
};

export default SearchPage;
