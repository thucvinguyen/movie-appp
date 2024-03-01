import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieGenres({ movieGenres }) {
  const navigate = useNavigate();
  const [genresAnchorEl, setGenresAnchorEl] = React.useState(null);

  const handleGenresOpen = (event) => {
    setGenresAnchorEl(event.currentTarget);
  };

  const handleGenresClose = () => {
    setGenresAnchorEl(null);
  };

  const handleClick = () => {
    navigate(`genre/movie`);
  };

  return (
    <>
      <Menu
        anchorEl={genresAnchorEl}
        open={Boolean(genresAnchorEl)}
        onClose={handleGenresClose}
        style={{ cursor: "pointer" }}
      >
        <MenuItem onClose={handleGenresClose} onClick={handleClick}>
          Genre List
        </MenuItem>
      </Menu>
    </>
  );
}

export default MovieGenres;
