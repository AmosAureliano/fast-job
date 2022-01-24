import {
    Container,
    Main,
      RightSide,
      LeftSide2,
      Title,
      FormUser,
      ContentInput,
      Input,
      NextButton,
      TextButton
  } from "../../styles/pages/SignInStyle";
  
  export default function Home() {
    return (
      <Container>
        <Main>
            <LeftSide2 />
            <RightSide>
                <img src="assets/logo-ok.png" alt="First Job White" />
                <Title>Sign In</Title>
                
                <FormUser>
                    <ContentInput>                   
                        <Input
                            type="text"
                            placeholder="Usuário"
                        />
                    </ContentInput>

                    <ContentInput>
                        <Input
                            type="text"
                            placeholder="Senha"
                        />
                    </ContentInput>
                    <ContentInput>
                        <NextButton href="/home">
                            <TextButton>
                                Entrar
                            </TextButton>
                        </NextButton>
                    </ContentInput>
                </FormUser>

            </RightSide>
        
        </Main>
      </Container>
    );
  }
  