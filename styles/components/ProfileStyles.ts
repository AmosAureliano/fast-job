import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 495.3px;
  display:flex;
  flex-direction: column;
  align-items:right;
  background-color: #FFF;
  border-radius: 5px;
  margin: 5vh 0;

  @media screen and (min-width: 500px){
    width: 417px;
    height: 590px;
  }

  @media screen and (min-width: 1500px){
    width: 595px;
    height: 842px;
  }
`;

export const MainData = styled.div`
  margin: 1.5rem 1rem 1rem 1rem;
  display:flex;
  justify-content: left;
  align-items: center;
 
  @media screen and (min-width: 500px){
    margin: 2rem 1rem 1rem 1.5rem;
  }

  @media screen and (min-width: 1500px){
    margin: 3rem 2rem 2rem 2rem;
  }
`;

export const Picture = styled.section`
  margin-right:1rem;
  img{
    width: 106.5px;
    height: 102px;
    object-fit: cover;
  }

  @media screen and (min-width: 500px){
    margin-right:1rem;
   img{
    width: 150px;
    height: 150px;
    }
  }

  @media screen and (min-width: 1500px){
    margin-right:2rem;
   img{
    width: 213px;
    height: 204px;
    }
  }
  
`;

export const Data = styled.section`
  line-height: 1.3rem;
  font-size: 0.6rem; 
  h2{
    font-weight: 400;
  }
  h2 :first-child{
    font-weight: 800;
  }

  @media screen and (min-width: 500px){
    line-height: 1.5rem;
    font-size: 0.6rem; 
  }

  @media screen and (min-width: 1500px){
    line-height: 2rem;
    font-size: 0.8rem; 
  }
`;

export const MoreData = styled.div`
  margin: 0 1.5rem;
  font-size: 0.7rem;
  
  h3{
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
  p, ul{
    margin-bottom: 0.3rem;
  }
  ul{
    list-style: none
  }
  li{
    margin-bottom: 0.3rem;
  }

  @media screen and (min-width: 500px){
    margin: 0 1.5rem;
    h3{
      margin-bottom: 0.3rem;
    }
    p, ul{
      margin-bottom: 0.6rem;
    }
    li{
      margin-bottom: 0.3rem;
    }
  }

  @media screen and (min-width: 1500px){
    font-size:1rem;
    margin: 0 2rem;
    h3{
      margin-bottom: 0.7rem;
    }
    p, ul{
      margin-bottom: 0.9rem;
    }
    li{
      margin-bottom: 0.6rem;
    }
  }
`;

export const Button = styled.button`
  background: #3d3c99;
  border: none;
  padding: 0.625rem 0.9375rem;
  border-radius: 2px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.6rem;
  outline: none;
  cursor: pointer;
  transition: 0.2s;

  margin-top: 0.5rem;
  align-self: center;


  &:hover {
    background: #2f2d95;
  }


  @media screen and (min-width: 500px){
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 1500px){
    margin-top: 2rem;
    font-size: 0.8rem;
  }
`;