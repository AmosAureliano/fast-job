import styled from "styled-components";

export const Container = styled.article`
  background: #fef8f8;
  /* display: grid;
  grid-template-rows: 1fr 1fr 1fr; */
  display: flex;
  flex-direction: column;
  width: 325px;
  padding: 15px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #e8eae6;
  margin-bottom: 15px;
`;

export const InfoPersonView = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #eeeeee;

  & img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }
`;

export const ItemListInfo = styled.li`
  display: flex;

  & strong {
    font-weight: 500;
  }

  & span {
    padding-left: 5px;
  }
`;

export const ListInfo = styled.ul`
  /* text-overflow: ellipsis; */
  list-style: none;

  max-width: 180px;
  max-height: 100px;
  /* overflow: hidden; */

  & ${ItemListInfo}:nth-child(2) {
    margin: 10px 0;
  }
`;

export const SkillsView = styled.section`
  border-bottom: 0.5px solid #eeeeee;
  padding: 15px 0;

  & p {
    font-weight: 500;
  }
`;

export const SkillContent = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 30px 10px;
  gap: 1rem;
`;

export const SkillProfile = styled.div`
  width: 100px;
  padding: 10px 0;
  background: #f2eaea;
  text-align: center;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #e8eae6;

  & span {
    font-weight: 500;
    font-size: 0.75rem;
  }
`;

export const MoreActionsView = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 15px;

  & button {
    border: none;
    border-radius: 5px;
    width: 45%;
    padding: 15px 10px;
    cursor: pointer;
    outline: none;

    & strong {
      font-size: 0.75rem;
    }
  }
  & a{
    text-decoration: none;
  }
  & button:first-child {
    background: #f2eaea;
  }

  & button:last-child {
    background: #2f2d95;
    color: #ffffff;
  }
`;
