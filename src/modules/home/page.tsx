import React from "react";
import ReactDOM from 'react';
import { MovieCardMaker } from "../../utils/movieCardCreator";
import { StyledContainer, StyledItemContainer } from "../../components/styles/commonStyledComponents";

export const HomePage = (props: any) => {
  console.log(props);
  return (
    <StyledContainer>
      <StyledItemContainer>  
        <MovieCardMaker />    
      </StyledItemContainer>
    </StyledContainer>
  )
}