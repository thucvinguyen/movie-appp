import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card
      className="card"
      onClick={handleClick}
      sx={{
        width: 300,
        height: 300,
        borderRadius: "6px",
        mt: 4,
        cursor: "pointer",
      }}
    >
      <CardActionArea>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          sx={[
            {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "300px",
            },
          ]}
        >
          <Paper className="content">
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={[
                  {
                    maxHeight: "30%",
                    overflow: "hidden",
                  },
                ]}
              >
                <Typography
                  gutterBottom
                  variant="body3"
                  component="div"
                  display="flex"
                  justifyContent="center"
                >
                  {`${movie.original_title}`}
                </Typography>

                <Stack flexDirection="row" justifyContent="flex-end" mt={1}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    mr={3}
                  >
                    <RecommendIcon
                      className="recommend_icon"
                      fontSize="small"
                    />
                    <Typography variant="subtitle2" ml={1}>
                      {`${movie.vote_average}`}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <FavoriteIcon className="favorite_icon" fontSize="small" />
                    <Typography variant="subtitle2" ml={1}>
                      {`${movie.vote_count}`}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Paper>
        </Box>
      </CardActionArea>
    </Card>
  );
}
