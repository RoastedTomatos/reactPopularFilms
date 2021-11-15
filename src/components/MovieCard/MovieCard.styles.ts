import styled from "styled-components";


export const StyledCard = styled.section`
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

export const StyledInfo = styled.div`
  font-size: large;
  text-align: center;
`;

export const StyledImage = styled.img`
  margin: 2px;
  min-height: 20rem;
  max-height: 20rem;
`;

export const StyledGenre = styled.p`
  font-size: medium;
  margin-left: auto;
  margin-right: 5%;
`;

export const CardFooter = styled.section`
  display: flex;
  flex-direction: row;
`;
