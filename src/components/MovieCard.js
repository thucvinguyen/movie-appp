import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Card
      className="card"
      sx={{
        width: 300,
        height: 500,
        borderRadius: "6px",
        mt: 4,
        cursor: "pointer",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          sx={[
            {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "500px",
            },
          ]}
        >
          <Paper className="content" onClick={(e) => e.stopPropagation()}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  maxHeight: "30%",
                  overflow: "hidden",
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography gutterBottom variant="h6" component="div">
                    {`${movie.original_title}`}
                  </Typography>
                  <Typography variant="subtitle2">
                    {`${movie.release_date}`}
                  </Typography>
                </Box>
                {isFavorite ? (
                  <FavoriteIcon
                    className="recommend_icon"
                    fontSize="large"
                    onClick={handleFavoriteClick}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="recommend_icon"
                    fontSize="large"
                    onClick={handleFavoriteClick}
                  />
                )}
              </Box>
            </CardContent>
          </Paper>
        </Box>
      </CardActionArea>
    </Card>
  );
}
