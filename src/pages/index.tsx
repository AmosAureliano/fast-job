import Link from "next/link";
import {
  Container,
  Text,
  SearchBarContainer,
  Header
} from "../../styles/pages/IndexStyle";

export default function Landing() {
  return (
    <Container>
      <Header>
        <img src="assets/logo-ok.png" alt="Logo Fast Job" />
        
      </Header>
      <Text>Seu novo emprego em poucos passos.</Text>
      <SearchBarContainer>
        <input type="text" placeholder="Informe uma profissão" />
        
        <a href="/home"><button>Pesquisar</button></a>
        
      </SearchBarContainer>
      <Link href="/signUp">
        <a style={{color: '#FFFFFF', fontWeight: '700', marginTop: '2rem'}}>
          Ainda não possui conta? <strong>Cadastre-se</strong>
        </a>
      </Link>
    </Container>
  );
}
