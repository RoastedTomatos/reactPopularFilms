import React from "react";
import { StyledContainer, StyledError } from "../styles/commonStyledComponents";

export const ErrorMesage = (): any => {
  return (
    <StyledContainer>
      <StyledError>
        Error 404
      </StyledError>
    </StyledContainer>
  )
}