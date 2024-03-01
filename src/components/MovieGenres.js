import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieGenres({ movieGenres }) {
  // const navigate = useNavigate();
  const [genresAnchorEl, setGenresAnchorEl] = React.useState(null);

  const handleGenresOpen = (event) => {
    setGenresAnchorEl(event.currentTarget);
  };

  const handleGenresClose = () => {
    setGenresAnchorEl(null);
  };

  // const handleClick = () => {
  //   navigate(`genre/movie`);
  // };

  return (
    <>
      <Typography
        variant="h8"
        color="inherit"
        component="div"
        onMouseEnter={handleGenresOpen}
        onMouseLeave={handleGenresClose}
        style={{ cursor: "pointer" }}
      ></Typography>
      {/* <Menu
        anchorEl={genresAnchorEl}
        open={Boolean(genresAnchorEl)}
        onClose={handleGenresClose}
        style={{ cursor: "pointer" }}
      >
        <MenuItem onClose={handleGenresClose} onClick={handleClick}>
          Genre List
        </MenuItem>
      </Menu> */}
      Movies by genres
    </>
  );
}

export default MovieGenres;
