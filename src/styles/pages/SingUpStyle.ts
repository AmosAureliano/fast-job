import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  height: 100vh;
  display: grid;
  @media screen and (min-width: 900px) {
    flex: 1;
    display: grid;
    grid-template-columns: 1.8fr 3.2fr;
  }
`;

export const LeftSide = styled.div`
  background-image: url("assets/imagemOK.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;

  @media screen and (min-width: 900px) {
    height: 100%;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  @media screen and (min-width: 900px) {
    padding: 2rem 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
`;

export const ContentLine = styled.div`
  @media screen and (min-width: 900px) {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 3rem;
  }
`;

export const ContentInput = styled.div`
  margin-top: 1rem;
  @media screen and (min-width: 900px) {
    margin-top: 0;
  }
`;

export const InputLabel = styled.label``;

export const Input = styled.input`
  margin-top: 0.2rem;
  width: 100%;
  background-color: #ede5e5;
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  &:focus {
    outline: none;
  }
`;

export const ContentTextArea = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  margin-top: 0.2rem;
  width: 100%;
  background-color: #ede5e5;
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const ContentSelector = styled.div`
  margin-top: 1rem;
`;
export const Selector = styled.select`
  margin-top: 0.2rem;
  width: 100%;
  background-color: #ede5e5;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const Option = styled.option`
  &:focus {
    outline: none;
  }
`;

export const ContentLineTree = styled.div`
  margin-bottom: 1rem;
  @media screen and (min-width: 900px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    gap: 2rem;
  }
`;

export const ContentSkills = styled.div`
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 2rem;
  }
`;

export const CircleButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #D12B2B;
  margin-top: 2rem;
  border: none;
  cursor: pointer;
  display: none;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const TextCircleButton = styled.p`
  color: #ffffff;
`;

export const NextButton = styled.a`
  height: 6vh;
  width: 100vw;
  margin: 1rem 0;
  background-color: #D12B2B;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media screen and (min-width: 900px) {
    height: auto;
    width: auto;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;
export const TextButton = styled.p`
  color: #ffffff;
  font-size: 14pt;
`;
