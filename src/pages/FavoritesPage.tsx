import { StyledContainer, StyledFavoritesContainer } from "../components/styles/commonStyledComponents";
import { FavoritesCreator } from "../utils/favoritesCreator";

export const FavoritesPage = (): any => {
  return (
    <StyledContainer>
        <StyledFavoritesContainer>
          <FavoritesCreator />
        </StyledFavoritesContainer>
    </StyledContainer>
  )
} 