import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url('assets/background-landing.png');
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -12vh;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
  }
  img {
    min-width: 12vw;
  }
`;

export const Text = styled.h1`
  width: 90vw;
  margin-top: 1vh;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
`;

export const SearchBarContainer = styled.div`
  width: 90vw;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: row;

  input {
    height: 8vh;
    min-width: 60vw;
    font-weight: 600;
    text-align: left;
    font-size: 1.5rem;
    color: rgba(83, 81, 81, 0.9);
    background: #ffffff;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 4rem 0 0 4rem;
    border: none;
    padding-left: 2rem;

    -webkit-appearance: none; /* Remove estilo padrão do Chrome */
    -moz-appearance: none; /* Remove estilo padrão do FireFox */
    appearance: none; /* Remove estilo padrão do FireFox*/
  }
  button {
    height: 100%;
    min-width: 10vw;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    background: #955f2d;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 0 4rem 4rem 0;
    border: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 960px) {
    flex-direction: row;

    input {
      min-width: 65vw;
      font-size: 1rem;
    }
    button {
      height: 100%;
      width: 25vw;
      font-size: 1rem;
      line-height: 30px;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
  color: '#FFFFFF';
  margin-top: '2rem';
`;
