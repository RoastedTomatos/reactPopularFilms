import styled from "styled-components";

export const StyledCard = styled.section`
  position: relative;
  margin: 2%;
  width: 15rem;
  min-height: 25rem;
  max-height: 25rem;
  height: max-content;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  color: #000;
  transition: 0.25s ease-in-out;
  &:hover {
    box-shadow: 0px 14px 20px -6px;
    transform: scale(1.01);
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

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 25%);
  color: red;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 30px;
  width: 30px;
  margin: 10px;
  top: 0px;
  right: 0px;
  transition: 0.25s ease-in-out;
  &:active {
    transform: scale(1.25);
  }
`;
