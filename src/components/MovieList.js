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

// import React, { useState } from "react";
// import MovieCard from "./MovieCard";
// import { Grid, Button } from "@mui/material";
// import MyList from "./MyList";

// function MovieList({ movies }) {
//   const [selectedMovies, setSelectedMovies] = useState([]);

//   const handleSelectMovie = (movie) => {
//     setSelectedMovies((prevSelectedMovies) => {
//       const isAlreadySelected = prevSelectedMovies.some(
//         (selectedMovie) => selectedMovie.movieId === movie.movieId
//       );

//       if (isAlreadySelected) {
//         return prevSelectedMovies.filter(
//           (selectedMovie) => selectedMovie.movieId !== movie.movieId
//         );
//       } else {
//         return [...prevSelectedMovies, movie];
//       }
//     });
//   };

//   return (
//     <Grid container spacing={3}>
//       {movies.map((movie, index) => (
//         <Grid item key={movie.movieId} xs={12} md={6} lg={3}>
//           <MovieCard
//             movie={movie}
//             isSelected={selectedMovies.some(
//               (selectedMovie) => selectedMovie.movieId === movie.movieId
//             )}
//             onSelectMovie={handleSelectMovie}
//           />
//         </Grid>
//       ))}
//       {/* <Grid item xs={12}>
//         <MyList selectedMovies={selectedMovies} />
//       </Grid> */}
//     </Grid>
//   );
// }

// export default MovieList;
