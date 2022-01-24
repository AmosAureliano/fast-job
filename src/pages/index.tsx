import { useRouter } from 'next/router';

import {
  Container,
  Text,
  SearchBarContainer,
  Header,
  Link,
} from '../styles/pages/IndexStyle';

export default function Landing() {
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push('/signup');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    router.push('/signin');
  };

  return (
    <Container>
      <Header>
        <img src="assets/logo-ok.png" alt="Logo Fast Job" />
      </Header>
      <Text>Seu novo emprego em poucos passos.</Text>
      <SearchBarContainer>
        <input type="text" placeholder="Informe uma profissão" />

        <a href="/home">
          <button>Pesquisar</button>
        </a>
      </SearchBarContainer>

      <Link
        onClick={handleSignUp}
        style={{ color: '#FFFFFF', marginTop: '2rem' }}
      >
        Ainda não possui conta? <strong>Cadastre-se</strong>
      </Link>

      <Link
        onClick={handleSignIn}
        style={{ color: '#000000', marginTop: '2rem' }}
      >
        <strong>Entrar Agora</strong>
      </Link>
    </Container>
  );
}
