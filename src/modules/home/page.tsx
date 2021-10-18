import React from "react";
import ReactDOM from 'react';
import { MovieCardMaker } from "../../utils/movieCardCreator";
import { StyledContainer, StyledItemContainer } from "../../components/styles/styledComponents";

export const HomePage = () => {
  return (
    <StyledContainer>
      <StyledItemContainer>  
        <MovieCardMaker />    
      </StyledItemContainer>
    </StyledContainer>
  )
}