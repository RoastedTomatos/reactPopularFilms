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


export const MovieCard = ({image, name, year, genre, id} :any) => {
  const dispatch = useDispatch();

  const onFavoritesClicked = () => {
    let favoritesIds = [];
    if(store.getState().
      favoriteFilms.
      includes(id)) 
        {
          favoritesIds = store.getState().
          favoriteFilms.
          filter((item: number) => item !== id);
        } else {
          favoritesIds = store.getState().favoriteFilms;
          favoritesIds.push({name, genre, year, image, id});
    }
    dispatch(setFavorites(favoritesIds));
    dispatch({type:"GET_MOVIES"}); //Тестовый скрипт
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