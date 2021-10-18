import styled from "styled-components";
import { Button, Typography, AppBar, Card, Link } from "@mui/material";

const StyledFooter = styled.section`
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: black;
  text-align: center;
  background-color: #313131;
`;
const StyledItemContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 5%;
  margin-right: 3%;
  min-height: 50em;
`;
const Wrapper = styled.section`
  background-size: cover;
  background-color: #757575;
  margin: 0;
`;
const StyledContainer = styled.section`
  border: solid 1px;
  display: flex;
  background-color: white;
  margin-right: 15%;
  margin-left: 15%;
`;

const StyledFavoritesContainer = styled.div`
  font-size: large;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 3%;
  min-height: 50em;
`;

const StyledButton = styled(Button)`
  && {
    margin-left: auto;
    color: white;
  }
`;

const StyledTypography = styled(Typography)`
  && {
    color: white;
    justify-content: start;
    margin-right: 2%
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    position: static;
    background-color: #313131;
  };
`;

const StyledCard = styled(Card)`
&& {
    max-height: 350px;
    max-width: 200px;
    flex: 0 1 auto;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 2%;
    margin-right: 2%;
}
`;

const StyledLink = styled(Link)`
  && {
    color: white;
  }
`;

const StyledLogo = styled.section`
  font-size: large;
  display: flex;
  padding: 1%;
  align-items: flex-end;
  margin-right: 2%;
  background-color: #212121;
`;

export {
  StyledAppBar,
  StyledButton,
  StyledCard,
  StyledLogo,
  StyledLink,
  StyledTypography,
  StyledFavoritesContainer,
  StyledFooter,
  StyledItemContainer,
  StyledContainer,
  Wrapper,
};
