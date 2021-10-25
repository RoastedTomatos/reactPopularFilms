import { IconButton }                   from "@mui/material";
import styled                           from "styled-components";
import FavoriteIcon                     from "@mui/icons-material/Favorite";
import { addToFavorites }               from "../../redux/actions";
import { store }                        from "../../redux/reducers"

export const MovieCard = ({image, name, year, genre} :any) => {
  return(
      <StyledCard>
        <StyledImage src={image} />
        <>
          <StyledInfo>{name},{year}</StyledInfo>
          <CardFooter>
            <IconButton onClick={store.dispatch(addToFavorites)}>
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

const StyledCard = styled.section`
  margin: 2%;
  width: 15rem;
  min-height: 25rem;
  max-height: 25rem;
  height: max-content;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  color: #000;
  box-shadow: 0 8px 14px -6px;
  transition: 0.25s ease-in-out;
  &:hover {
    box-shadow: 0px 8px 20px -6px;
    background-color: #e9e9e9;
  }
`;

const StyledInfo = styled.div`
  font-size: large;
  text-align: center;
`;

const StyledImage = styled.img`
  margin: 2px;
  min-height: 20rem;
  max-height: 20rem;
`;

const StyledGenre = styled.p`
  font-size: medium;
  margin-left: auto;
  margin-right: 5%;
`;

const CardFooter = styled.section`
  display: flex;
  flex-direction: row;
`;