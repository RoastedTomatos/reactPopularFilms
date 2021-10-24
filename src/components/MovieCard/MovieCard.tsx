import CardMedia                        from '@mui/material/CardMedia';
import CardContent                      from '@mui/material/CardContent';
import CardActions                      from '@mui/material/CardActions';
import IconButton                       from '@mui/material/IconButton';
import Typography                       from '@mui/material/Typography';
import FavoriteIcon                     from '@mui/icons-material/Favorite';
import Card                             from '@mui/material/Card'
import Link                             from '@mui/material/Link'
import styled                           from "styled-components";



export const MovieCard = ({ name, year, genre, image }: any) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Place for a movie poster..."
      />
      <CardContent>
        <Link href="#" underline="none">
          <Typography variant="body2" color="text.secondary" align="center">
            {name}, {year}, {genre}
          </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}


const StyledCard = styled(Card)`
&& {
    max-height: 450px;
    width: 20%;
    flex: 0 1 auto;
    margin: 2%;
    box-shadow: 0 8px 14px -6px;
    transition: 0.4s ease-in-out;
    &:hover {
      box-shadow: 0 8px 26px -6px;
    }
}
`;