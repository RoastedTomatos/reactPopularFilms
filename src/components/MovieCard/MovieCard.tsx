import * as React                      from 'react';
import { styled }                      from '@mui/material/styles';
import CardMedia                       from '@mui/material/CardMedia';
import CardContent                     from '@mui/material/CardContent';
import CardActions                     from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography                      from '@mui/material/Typography';
import FavoriteIcon                    from '@mui/icons-material/Favorite';
import {StyledCard}                    from '../styles/styledComponents'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const MovieCard = ({ name, year, genre, image }: any) => {
  console.log(name, year, genre);
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Place for a movie poster..."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          {name}, {year}, {genre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}

