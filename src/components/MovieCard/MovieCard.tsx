import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import {
  StyledCard,
  StyledImage,
  StyledInfo,
  CardFooter,
  StyledGenre,
  StyledButton,
} from "./MovieCard.styles";

export const setFavorites: any = (itemIds: any) => ({
  type: "SET_FAVORITES",
  payload: itemIds,
});

export const MovieCard = ({ image, name, year, genre, id }: any) => {
  const dispatch = useDispatch();

  const onFavoritesClicked = () => {
    let favoritesIds = [];
    console.log(store.getState().favoritesReducer.favoriteFilms);
    if (store.getState().favoritesReducer.favoriteFilms.includes(id)) {
      favoritesIds = store
        .getState()
        .favoriteFilms.filter((item: number) => item !== id);
    } else {
      favoritesIds = store.getState().favoritesReducer.favoriteFilms;
      favoritesIds.push({ name, genre, year, image, id });
    }

    console.log(favoritesIds);
    dispatch(setFavorites(favoritesIds));
  };

  return (
    <StyledCard>
      <StyledImage src={image} />
      <StyledButton onClick={() => onFavoritesClicked()}>
        <FavoriteIcon />
      </StyledButton>
      <>
        <StyledInfo>
          <b>{name}</b>
        </StyledInfo>
        <StyledInfo>{year}</StyledInfo>
        <CardFooter>
          <StyledGenre>{genre}</StyledGenre>
        </CardFooter>
      </>
    </StyledCard>
  );
};
