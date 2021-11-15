import { IconButton }                                                   from "@mui/material";
import FavoriteIcon                                                     from "@mui/icons-material/Favorite";
import { useDispatch }                                                  from "react-redux";
import { persist }                                                      from "../../store"
import { store }                                                        from "../../store"
import { StyledCard, StyledImage, StyledInfo, CardFooter, StyledGenre } from "./MovieCard.styles";

export const setFavorites: any = (itemIds: any) => ({
  type: "SET_FAVORITES",
  payload: itemIds
});


export const MovieCard = ({image, name, year, genre} :any) => {
  const dispatch = useDispatch();

  const onFavoritesClicked = () => {
    let favoritesIds = [];
    if(store.getState().favoriteFilms.includes(name, genre, year, image)) {
      console.log(`${name} removed from favorites`);
      favoritesIds = store.getState().favoriteFilms.filter((id: string) => id !== name);
    } else {
      favoritesIds = store.getState().favoriteFilms;
      console.log(`${name} added to favorites`);
      favoritesIds.push(name, genre, year, image);
    }
    dispatch(setFavorites(favoritesIds));
  };

  return(
      <StyledCard>
        <StyledImage src={image} />
        <>
          <StyledInfo>{name},{year}</StyledInfo>
          <CardFooter>
            <IconButton onClick={onFavoritesClicked}>
              <FavoriteIcon />
            </IconButton>
            <StyledGenre>
              {genre}
            </StyledGenre>
          </CardFooter>
        </>
      </StyledCard>
  )
}