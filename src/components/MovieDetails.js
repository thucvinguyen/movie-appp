import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MovieDetails({ movieDetail }) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "flex-start" }}
      spacing={2}
      sx={{
        borderRadius: "10px",
        p: 2,
        boxShadow: 1,
        bgcolor: "background.paper",
        mt: 8,
      }}
    >
      {/* Image Section */}
      <Box flexShrink={0} maxWidth="100%">
        <img
          alt={`${movieDetail.original_title}`}
          height="500px"
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          style={{ borderRadius: "10px", maxWidth: "100%" }}
        />
      </Box>

      {/* Details Section */}
      <Stack flexGrow={1} spacing={2} alignItems="flex-start">
        {/* Title */}
        <Typography variant="h6">{`${movieDetail.original_title}`}</Typography>
        {/* Overview */}
        <Typography variant="body" sx={{ maxWidth: "100%" }}>
          {`${movieDetail.overview}`}
        </Typography>
        {/* Genres */}
        <Stack direction="row" spacing={1}>
          <Typography variant="body">Genres:</Typography>
          {movieDetail.genres.map((item) => (
            <Chip
              key={`${item.id}`}
              label={`${item.name}`}
              size="small"
              variant="outlined"
            />
          ))}
        </Stack>
        {/* Production Companies */}
        <Stack direction="row" spacing={1}>
          <Typography variant="body">Production Companies:</Typography>
          {movieDetail.production_companies
            .filter((item) => item.logo_path !== null)
            .map((item) => (
              <Chip
                key={`${item.id}`}
                avatar={
                  <Avatar
                    alt={item.name}
                    src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                  />
                }
                label={`${item.name}`}
                size="small"
                variant="filled"
              />
            ))}
        </Stack>
        {/* Production Country */}
        <Stack direction="row" spacing={1}>
          <Typography variant="body">Production Country:</Typography>
          {movieDetail.production_countries
            .filter((item) => item.logo_path !== null)
            .map((item) => (
              <Chip
                key={`${item.id}`}
                label={`${item.name}`}
                size="small"
                variant="filled"
              />
            ))}
        </Stack>
        Release Date
        <Stack direction="row" spacing={1}>
          <Typography variant="body">Released:</Typography>
          <Chip
            label={`${movieDetail.release_date}`}
            size="small"
            variant="outlined"
          />
        </Stack>
        {/* Ratings */}
        {/* <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Stack direction="row" alignItems="center">
            <RecommendIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">{`${movieDetail.vote_count}`}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <FavoriteIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">{`${movieDetail.vote_average}`}</Typography>
          </Stack>
        </Stack> */}
        {/* Video */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ maxWidth: "100%" }}
        >
          <Typography variant="body">Preview:</Typography>
          {movieDetail.videos.results
            .filter(
              (item, index) =>
                index < 3 && item.site.toLowerCase() === "youtube"
            )
            .map((item) => (
              <a
                key={item.id}
                href={`https://www.youtube.com/watch?v=${item.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Chip
                  key={item.id}
                  avatar={
                    <Avatar
                      alt="YouTube"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/1200px-YouTube_icon_%282013-2017%29.png"
                    />
                  }
                  label={item.name}
                  size="small"
                  variant="outlined"
                  clickable
                /> */}
                <img
                  src={`https://img.youtube.com/vi/${item.key}/0.jpg`}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "56px",
                    borderRadius: "5px",
                  }}
                />
              </a>
            ))}
        </Stack>
        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={2} justifyContent="center">
          <Button variant="contained" color="primary">
            Watch Now
          </Button>
          <Button variant="outlined">Add to List</Button>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Stack direction="row" alignItems="center">
          <RecommendIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{`${movieDetail.vote_count}`}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <FavoriteIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{`${movieDetail.vote_average}`}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MovieDetails;
