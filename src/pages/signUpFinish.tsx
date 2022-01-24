
import {
  Container,
  Main,
	LeftSide,
	RightSide,
	RightSide2,
	Title,
	ContentUpload,
	LabelItemUpload,
	TitleUpload,
	ItemUpload,
	FormUser,
	ContentInput,
	InputLabel,
	Input,
	NextButton,
	TextButton
} from "../../styles/pages/SingUpFinishStyle";

export default function Home() {
  return (
    <Container>
      <Main>
			<RightSide2 />
			<LeftSide>
				<Title>Sign Up</Title>

				<ContentUpload>
					<TitleUpload>
						Foto de Perfil
					</TitleUpload>
					
					<LabelItemUpload >+
						<ItemUpload type="file" id="file" name="file" />
					</LabelItemUpload>
					
				</ContentUpload>

				<FormUser>
					<ContentInput>
						<InputLabel>Usuário</InputLabel>
						<Input
							type="text"
							placeholder="Informe seu usuário"
						/>
					</ContentInput>

					<ContentInput>
						<InputLabel>Senha</InputLabel>
						<Input
							type="text"
							placeholder="Informe seu usuário"
						/>
					</ContentInput>


					<ContentInput>
						<InputLabel>Confirmar Senha</InputLabel>
						<Input
							type="text"
							placeholder="Informe seu usuário"
						/>
					</ContentInput>

					<ContentInput>
						<NextButton href="/home">
							<TextButton>
								Concluir Cadastro
							</TextButton>
						</NextButton>
					</ContentInput>
				</FormUser>

			</LeftSide>
			<RightSide />
      </Main>
    </Container>
  );
}
