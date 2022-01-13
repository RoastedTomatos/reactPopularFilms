import { StyledContainer } from "../components/styles/commonStyledComponents";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { MovieCardMaker } from "../utils/movieCardCreator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


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
