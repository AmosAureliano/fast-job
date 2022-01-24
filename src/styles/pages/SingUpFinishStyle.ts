
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

`;

export const Main = styled.main`
	display: grid;
	height: 100vh;
	@media screen and (min-width: 900px) {
		display: grid;
		grid-template-columns: 3fr 2fr;
  }
`;

export const RightSide = styled.div`
    background-image: url("assets/imagemOK.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	display: none;
	flex-direction: column;
	align-items: center;
	height: 50vh;

	@media screen and (min-width: 900px) {
		height: 100%;
		display: flex;
		
	}
`;

export const RightSide2 = styled.div`
    background-image: url("assets/imagemOK.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 50vh;

	@media screen and (min-width: 900px) {
		display: none;
	}
`;

export const LeftSide = styled.div`
	@media screen and (min-width: 900px) {
		padding: 2rem 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Title = styled.h1`
	font-size: 24pt;
	text-align: center;
	margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
`;

export const ContentUpload = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;
`;

export const TitleUpload = styled.h5`
	font-size: 14pt;
`;


export const LabelItemUpload = styled.label`
	margin-top: 1rem;
	width: 130px;
	height: 130px;
	background-color: #EDE5E5;
	border: none;
	border-radius: 50%;
	padding: 0.8rem;
	font-size: 5rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;

	&:focus {
		outline: none;
	}
`;
export const ItemUpload = styled.input`
	margin-top: 1rem;
	width: 130px;
	height: 130px;
	background-color: #EDE5E5;
	border: none;
	border-radius: 50%;
	padding: 0.8rem;
	display: none;
	&:focus {
		outline: none;
	}
`;

export const FormUser = styled.div`
	padding: 1rem 1rem;
	@media screen and (min-width: 900px) {
		padding: 1rem 8rem;
	}
`;

export const ContentInput = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 900px) {
		margin-top: 1;
	}
`;

export const InputLabel = styled.label`
`;

export const Input = styled.input`
	margin-top: 0.2rem;
	width: 40vw;
	background-color: #EDE5E5;
	border: none;
	border-radius: 5px;
	padding: 0.8rem;
	&:focus {
		outline: none;
	}
`;

export const NextButton = styled.a`
	height: 6vh;
	width: 100vw;
	margin-top: 2rem;
	background-color: #D12B2B;
	text-decoration: none;
	border: none;
	border-radius: 10px;
	cursor: pointer;
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
