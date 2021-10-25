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
const Wrapper = styled.section`
  background-size: cover;
  background-color: #757575;
  margin: 0;
`;
const StyledContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  border: solid 1px;
  display: flex;
  background-color: white;
  margin-right: 12%;
  margin-left: 12%;
  min-height: 50rem;
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

const StyledLink = styled(Link)`
  && {
    color: white;
    margin-right: 2em;
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


const StyledError = styled(Typography)`   //heh
&& {
  font-size: large;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 3%;
  min-height: 50em;
};
`;


export {
  StyledError,
  StyledAppBar,
  StyledButton,
  StyledLogo,
  StyledLink,
  StyledTypography,
  StyledFavoritesContainer,
  StyledFooter,
  StyledContainer,
  Wrapper,
};
