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
  // const [page, setPage] = useState(1);

  // const onFavoritesClicked = () => {
  //   let favoritesIds = [];
  //   if(store.getState().
  //     favoriteFilms.
  //     includes(id))
  //       {
  //         favoritesIds = store.getState().
  //         favoriteFilms.
  //         filter((item: number) => item !== id);
  //       } else {
  //         favoritesIds = store.getState().favoriteFilms;
  //         favoritesIds.push({name, genre, year, image, id});
  //   }
  //   dispatch(setFavorites(favoritesIds));
  // };

  return (
    <StyledCard>
      <StyledImage src={image} />
      <StyledButton>
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
