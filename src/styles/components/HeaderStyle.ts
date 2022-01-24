import styled from "styled-components";

interface AnchorProps {
  active: boolean;
}

interface MenuResponsiveProps {
  isOpen: boolean;
}

export const ButtonMenu = styled.button`
  background: #2f2d95;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.625rem;
  cursor: pointer;
  display: none;
`;

export const ButtonNewCurriculum = styled.button`
  background: #3d3c99;
  border: none;
  padding: 0.625rem 0.9375rem;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #2f2d95;
  }

  @media screen and (max-width: 1000px) {
    font-size: 87.5%;
  }

  @media screen and (max-width: 750px) {
    font-size: 87.5%;
  }
`;

export const Container = styled.header<MenuResponsiveProps>`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding: 0.625rem 0;
  position: fixed;
  background: white;
  width: 100vw;
  top: 0;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  & div:last-child {
    & img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }

    @media screen and (max-width: 700px) {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
    }
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 0;

    & div {
      flex: 1;
      justify-content: space-evenly;
      width: 100%;
    }

    & ${ButtonMenu} {
      display: flex;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;

  & li:nth-child(2) {
    margin: 0 1.25rem;
  }

  @media screen and (max-width: 700px) {
    /* flex-direction: column; */
    padding-bottom: 20px;
  }
`;

export const Anchor = styled.a<AnchorProps>`
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  color: ${(props) => (props.active ? "#2F2D95" : "#000000")};

  &:hover {
    border-bottom: 2px solid
      ${(props) => (props.active ? "#2F2D95" : "#000000")};
  }

  @media screen and (max-width: 1000px) {
    font-size: 93.75%;
  }

  @media screen and (max-width: 750px) {
    font-size: 87.5%;
  }
`;
