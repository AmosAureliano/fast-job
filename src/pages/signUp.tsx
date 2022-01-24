import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Title,
  SubTitle,
  ContentLine,
  ContentInput,
  InputLabel,
  Input,
  ContentTextArea,
  TextArea,
  ContentSelector,
  Selector,
  Option,
  ContentLineTree,
  ContentSkills,
  CircleButton,
  TextCircleButton,
  NextButton,
  TextButton,
} from "../../styles/pages/SingUpStyle";

export default function Home() {
  return (
    <Container>
      <Main>
        <LeftSide />

        <RightSide>
          <Title>Cadastre-se</Title>

          <SubTitle>Informações Pessoais</SubTitle>

          <ContentLine>
            <ContentInput>
              <InputLabel>Nome completo</InputLabel>
              <Input type="text" placeholder="Informe seu nome completo" />
            </ContentInput>
            <ContentInput>
              <InputLabel>Endereço de E-mail</InputLabel>
              <Input type="email" placeholder="Seu melhor e-mail" />
            </ContentInput>
          </ContentLine>

          <ContentLine>
            <ContentInput>
              <InputLabel>Data de Nascimento</InputLabel>
              <Input type="date" placeholder="" />
            </ContentInput>
            <ContentInput>
              <InputLabel>Número de Telefone</InputLabel>
              <Input
                type="text"
                placeholder="Ex: (99) 9999-9999"
                pattern="\(\d{2}\)\d{4}-\d{4}"
              />
            </ContentInput>
          </ContentLine>

          <ContentTextArea>
            <InputLabel>Objetivos</InputLabel>
            <TextArea
              rows={4}
              cols={33}
              placeholder="Descreva de forma sucinta os seus objetivos profissionais e pessoais"
            ></TextArea>
          </ContentTextArea>

          <SubTitle style={{marginTop: '2rem'}}>Formação</SubTitle>

          <ContentSelector>
            <InputLabel>Instituição</InputLabel>
            <Selector>
              <Option value="" disabled selected>
                Selecionar Instituição de Ensino
              </Option>
            </Selector>
          </ContentSelector>

          <ContentLineTree>
            <ContentInput>
              <InputLabel>Curso</InputLabel>
              <Input type="text" placeholder="Informe o seu curso" />
            </ContentInput>
          
            <ContentInput>
              <InputLabel>Ano de término</InputLabel>
              <Input type="text" placeholder="Ano de término" />
            </ContentInput>
            
            <CircleButton>
              <TextCircleButton>+</TextCircleButton>
            </CircleButton>

          </ContentLineTree>

          <SubTitle style={{marginTop: '2rem'}}>Skills</SubTitle>

          <ContentSkills>
            <ContentInput>
              <InputLabel>Habilidades</InputLabel>
              <Input
                type="text"
                placeholder="Ex: Python, Node.js, TypeScript etc..."
              />
            </ContentInput>

            <CircleButton>
              <TextCircleButton>+</TextCircleButton>
            </CircleButton>

            <NextButton href="/signUpFinish">
              <TextButton>Continuar</TextButton>
            </NextButton>
          </ContentSkills>
        </RightSide>
      </Main>
    </Container>
  );
}
