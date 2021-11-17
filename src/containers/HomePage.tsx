import { StyledContainer } from "../components/styles/commonStyledComponents";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { MovieCardMaker } from "../utils/movieCardCreator";

export const HomePage = (props: any) => {
  const renderMovieCards : any = () => {
    return MovieCardMaker
  };

  return (
    <StyledContainer>
      { MovieCardMaker() }
    </StyledContainer>
  )
};
