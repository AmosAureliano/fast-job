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
  TextButton,
} from '../styles/pages/SignInStyle';

import { useRouter } from 'next/router';

import Axios, { AxiosError } from 'axios';

export default function Home() {
  const router = useRouter();

  async function handleLogin() {
    const response = Axios({
      method: 'post',
      url: '/api/signin',
      data: {
        email: 'lcvs1@aluno.ifal.edu.br',
        password: '12345689',
      },
    });

    if (response) {
      router.push('/home');
    }
  }

  return (
    <Container>
      <Main>
        <LeftSide2 />
        <RightSide>
          <img src="assets/logo-ok.png" alt="First Job White" />
          <Title>Sign In</Title>

          <FormUser>
            <ContentInput>
              <Input type="text" placeholder="Usuário" />
            </ContentInput>

            <ContentInput>
              <Input type="text" placeholder="Senha" />
            </ContentInput>
            <ContentInput>
              <NextButton onClick={() => handleLogin()}>
                <TextButton>Entrar</TextButton>
              </NextButton>
            </ContentInput>
          </FormUser>
        </RightSide>
      </Main>
    </Container>
  );
}
