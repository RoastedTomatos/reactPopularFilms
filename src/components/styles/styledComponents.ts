import styled from "styled-components";
import { Button, Typography, AppBar, Card, Link } from "@mui/material";

const StyledFooter = styled.section`
  position: fixed;
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
`;
const Wrapper = styled.section`
  background-color: #757575;
  margin: 0;
`;
const StyledContainer = styled.section`
  background-color: white;
  margin-right: 15%;
  margin-left: 15%;
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
    margin-top: 2%;
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
  border-radius: 45%;
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
  StyledFooter,
  StyledItemContainer,
  StyledContainer,
  Wrapper,
};
