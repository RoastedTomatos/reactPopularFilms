import moviesArray from "../stuff/movies";
import { StyledContainer } from "../components/styles/commonStyledComponents";
import { MovieCard } from "../components/MovieCard/MovieCard";

export const HomePage = (props: any) => {
  const renderMovieCards : any = () => {
    return moviesArray.map(({ name, year, genre, image }) => {
      return (
        <>
          <MovieCard name={name}  year={year} genre={genre} image={image}/>
        </>
      );
    });
  };

  return (
    <StyledContainer>
      { renderMovieCards() }
    </StyledContainer>
  )
};
