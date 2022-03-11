import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 30px 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    margin: 60px 50px;
  }
`
export const ItemCompany = styled.div`
  margin: 30px;
  border-radius: 4px;
  border: 3px solid rgb(249, 249, 249, 0.1);
  cursor: pointer;
  transform: scale(1.05);
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  box-shadow: rgb(0 0 0 / 10%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  :hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 70%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
  }

  @media (max-width: 500px) {
    margin: 50px;
    height: 20%;
    width: 50%;
    transform: scale(1.8);
  }
`

export const ImageCompany = styled.img`
  width: 100%;
  top: 0;
  z-index: 1;
`
