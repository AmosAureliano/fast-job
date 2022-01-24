import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`;

export const Main = styled.main`
  flex: 1;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "filters gridStudents";
  gap: 3rem;


  @media screen and (max-width: 820px) {
    /* grid-template-columns: 1fr; */
    /* grid-template-areas: "gridStudents"; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftMenu = styled.aside`
  background: #D12B2B;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100vh;
  width: 20vw;
  grid-area: filters;
  position: fixed;

 
`;

export const ItemMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-weight: 600;
  width: 15vw;
  margin-top: 2rem;
`

export const ContainerIconMenu = styled.div`
  background-color: #FFFFFF;
  padding: .5rem;
  border-radius: .5rem;
  margin-right: 1rem;
`

export const Content = styled.article`
  width: 100%;
  height: 100vh;
  grid-area: gridStudents;
  /* transform: translateX(30%); */

  & select {
    margin-bottom: 1rem;
  }
`;

export const ContainerGeneralInfo = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

export const CardInfo = styled.div`
  background-color: #FFFFFF;
  padding: 1rem;
  border-radius: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 12vw;
`;

export const ContainerIconCardInfo = styled.div`
  background-color: #DA7A22;
  
  border-radius: .5rem;
  padding: 1rem;
`;

export const DataCardInfo = styled.div`
  p{
    font-size: 2rem;
    font-weight: 700;
  }
  margin-left: 1rem;
`;