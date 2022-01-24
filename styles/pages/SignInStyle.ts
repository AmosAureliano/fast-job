
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
`;

export const Main = styled.main`

	display: grid;

	@media screen and (min-width: 900px) {
    	flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 100vh;	
		
  }
`;


export const LeftSide2 = styled.div`
    background-image: url("assets/Rectangle82.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 50vh;

	@media screen and (min-width: 900px) {
		height: 100vh;
	}
`;



export const RightSide = styled.div`
	padding: 1rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	img{
		width: 25vw;
	}
	
	@media(max-width: 968px){
		padding: 0 1rem;
	}
`;

export const Title = styled.h1`
	font-size: 24pt;
	text-align: center;
	margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
`;

export const FormUser = styled.div`
	flex: 1;

	@media screen and (min-width: 900px) {
		padding: 3rem 10rem;
	}

`;

export const ContentInput = styled.div`
	margin-top: 1rem;
	@media screen and (min-width: 900px) {
		margin-top: 1;
	}
`;

export const InputLabel = styled.label`
`;

export const Input = styled.input`
	margin-top: 0.2rem;

	width: 30vw;
	background-color: #EDE5E5;

	border: none;
	border-radius: 5px;
	padding: 0.8rem;

	&:focus {
		outline: none;
	}

	@media(max-width: 900px){
		width: 100vw
	}
`;

export const NextButton = styled.a`
	height: 6vh;
	width: 100vw;

	margin-top: 2rem;

	background-color: #D12B2B;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	text-decoration: none;

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 900px) {
		height: 6vh;
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
