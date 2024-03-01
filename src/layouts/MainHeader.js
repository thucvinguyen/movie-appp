import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import SearchBar from "./SearchBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import MovieGenres from "../components/MovieGenres";

const navLinkStyles = {
  textDecoration: "none",
  color: "inherit",
  transition: "color 0.3s",
  "&:hover": {
    color: "lightblue",
  },
};

function MainHeader({ movieGenres }) {
  const auth = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleClick = () => {
    navigate(`genre/movie`);
  };

  const [genresAnchorEl, setGenresAnchorEl] = React.useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = React.useState(null);

  const handleGenresOpen = (event) => {
    setGenresAnchorEl(event.currentTarget);
  };

  const handleGenresClose = () => {
    setGenresAnchorEl(null);
  };

  const handleAvatarOpen = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h8" color="inherit" component="div">
            <NavLink to="/" style={navLinkStyles}>
              Home
            </NavLink>
          </Typography>
          <Box sx={{ width: 20 }} />
          {/* <Typography variant="h8" color="inherit" component="div">
            <NavLink
              to="/genres"
              style={navLinkStyles}
              onClick={handleGenresOpen}
            >
              Genres
            </NavLink>
            <Menu
              anchorEl={genresAnchorEl}
              open={Boolean(genresAnchorEl)}
              onClose={handleGenresClose}
              style={{ cursor: "pointer" }}
            >
              <MenuItem onClick={handleGenresClose}>Genre1</MenuItem>
              <MenuItem onClick={handleGenresClose}>Genre2</MenuItem>
            </Menu>
          </Typography> */}
          <Typography
            variant="h8"
            color="inherit"
            component="div"
            onMouseEnter={handleGenresOpen}
            onMouseLeave={handleGenresClose}
            style={{ cursor: "pointer" }}
          >
            Genres
          </Typography>
          <Menu
            anchorEl={genresAnchorEl}
            open={Boolean(genresAnchorEl)}
            onClose={handleGenresClose}
            style={{ cursor: "pointer" }}
          >
            <MenuItem onClose={handleGenresClose} onClick={handleClick}>
              {/* {movieGenres.genres.map((genre) => (
                <MenuItem key={genre.id} onClick={handleGenresClose}>
                  {genre.name}
                </MenuItem>
              ))} */}
              List of genres rendered here
            </MenuItem>
          </Menu>

          <Box sx={{ width: 20 }} />
          <Typography variant="h8" color="inherit" component="div">
            <NavLink to="/mylist" style={navLinkStyles}>
              My List
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 8 }} />
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <NotificationsIcon sx={{ mr: 2 }} />
          <div
            onMouseEnter={handleAvatarOpen}
            onMouseLeave={handleAvatarClose}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <IconButton
              color="inherit"
              aria-label="settings"
              onMouseLeave={handleAvatarClose}
              style={{ cursor: "pointer" }}
            >
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  border: "2px solid white",
                  borderRadius: "50%",
                }}
              >
                {user?.username[0]}
              </Avatar>
              <Menu
                anchorEl={avatarAnchorEl}
                open={Boolean(avatarAnchorEl)}
                onClose={handleAvatarClose}
                style={{ cursor: "pointer" }}
              >
                <MenuItem onClick={handleAvatarClose}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Profile Account
                </MenuItem>
                <MenuItem onClick={handleAvatarClose}>
                  <SettingsIcon sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
                <MenuItem onClick={handleAvatarClose}>
                  <HelpOutlineIcon sx={{ mr: 1 }} />
                  Help Center
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    auth.logout(() => navigate("/"));
                  }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  Log Out
                </MenuItem>
              </Menu>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
