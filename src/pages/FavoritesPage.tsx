import {
  StyledContainer,
  StyledFavoritesContainer,
} from "../styles/commonStyledComponents";
import { FavoritesCreator } from "../utils/favoritesCreator";

export const FavoritesPage = (): any => {
  return (
    <StyledContainer>
      <FavoritesCreator />
    </StyledContainer>
  );
};
