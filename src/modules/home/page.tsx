import React from "react";
import ReactDOM from 'react';
import { MovieCardMaker } from "../../utils/movieCardCreator";
import { StyledContainer } from "../../components/styles/commonStyledComponents";

export const HomePage = (props: any) => {
  console.log(props);
  return (
    <StyledContainer> 
      <MovieCardMaker />    
    </StyledContainer>
  )
}