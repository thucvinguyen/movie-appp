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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "./SearchBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

function MainHeader() {
  const auth = useAuth();
  let navigate = useNavigate();

  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
            Home
          </Typography>
          <Box sx={{ width: 20 }} />
          <Typography variant="h8" color="inherit" component="div">
            TV Shows
          </Typography>
          <Box sx={{ width: 20 }} />
          <Typography variant="h8" color="inherit" component="div">
            Movies
          </Typography>
          <Box sx={{ width: 20 }} />
          <Typography variant="h8" color="inherit" component="div">
            New & Popular
          </Typography>
          <Box sx={{ width: 20 }} />
          <Typography variant="h8" color="inherit" component="div">
            My List
          </Typography>
          <Box sx={{ flexGrow: 8 }} />
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <NotificationsIcon sx={{ mr: 2 }} />
          <div
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <IconButton
              color="inherit"
              aria-label="settings"
              onMouseLeave={handleMenuClose}
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
              <ExpandMoreIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onMouseLeave={handleMenuClose}
              style={{ cursor: "pointer" }}
            >
              <MenuItem onClick={handleMenuClose}>
                <PersonIcon sx={{ mr: 1 }} />
                Profile Account
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <SettingsIcon sx={{ mr: 1 }} />
                Settings
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
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
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
