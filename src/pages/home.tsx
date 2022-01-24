import {
  Container,
  Main,
  LeftMenu,
  Content,
  ItemMenu,
  ContainerIconMenu,
  ContainerGeneralInfo,
  CardInfo,
  ContainerIconCardInfo,
  DataCardInfo,
  ContainerRecentJobs,
  ContainerLabels,
  CardJob,
} from '../styles/pages/HomeStyle';

import GridStudentItem from '../components/GridStudentItem';

export default function Home(props) {
  return (
    <Container>
      <Main>
        <LeftMenu>
          <img src="assets/logo-ok-white.png" alt="First Job White" />
          <ItemMenu>
            <ContainerIconMenu>
              <img src="assets/dashboard.png" alt="Dashboard icon" />
            </ContainerIconMenu>
            Dashboard
          </ItemMenu>

          <ItemMenu>
            <ContainerIconMenu>
              <img src="assets/job.png" alt="Job icon" />
            </ContainerIconMenu>
            Jobs
          </ItemMenu>

          <ItemMenu>
            <ContainerIconMenu>
              <img src="assets/candidates.png" alt="people together icon" />
            </ContainerIconMenu>
            Candidatos
          </ItemMenu>

          <ItemMenu>
            <ContainerIconMenu>
              <img src="assets/notification.png" alt="notification icon" />
            </ContainerIconMenu>
            Notificações
          </ItemMenu>

          <ItemMenu>
            <ContainerIconMenu>
              <img src="assets/account.png" alt="people alone icon" />
            </ContainerIconMenu>
            Minha conta
          </ItemMenu>
        </LeftMenu>

        <Content>
          <ContainerGeneralInfo>
            <CardInfo>
              <ContainerIconCardInfo>
                <img src="assets/dashboard.png" alt="people alone icon" />
              </ContainerIconCardInfo>
              <DataCardInfo>
                <p>447</p>
                <span>Candidatos</span>
              </DataCardInfo>
            </CardInfo>

            <CardInfo>
              <ContainerIconCardInfo>
                <img src="assets/dashboard.png" alt="people alone icon" />
              </ContainerIconCardInfo>
              <DataCardInfo>
                <p>1050</p>
                <span>Jobs publicados</span>
              </DataCardInfo>
            </CardInfo>

            <CardInfo>
              <ContainerIconCardInfo>
                <img src="assets/dashboard.png" alt="people alone icon" />
              </ContainerIconCardInfo>
              <DataCardInfo>
                <p>447</p>
                <span>Jobs disponíveis</span>
              </DataCardInfo>
            </CardInfo>

            <CardInfo>
              <ContainerIconCardInfo>
                <img src="assets/dashboard.png" alt="people alone icon" />
              </ContainerIconCardInfo>
              <DataCardInfo>
                <p>375</p>
                <span>Usuários premium online</span>
              </DataCardInfo>
            </CardInfo>
          </ContainerGeneralInfo>

          <ContainerRecentJobs>
            <p>Jobs Publicados recentemente</p>
            <ContainerLabels>
              <span>Título</span>
              <span>Interessados</span>
              <span>Status</span>
              <span>Tempo restante</span>
              <span>Ações</span>
            </ContainerLabels>
            <CardJob>
              <p>React developer (itaú)</p>
              <span>35</span>
              <button>Ativo</button>
              <p>5 dias</p>
              <button>
                {' '}
                <img src="assets/share.png" alt="Share icon" />
              </button>
            </CardJob>
          </ContainerRecentJobs>
        </Content>
      </Main>
    </Container>
  );
}

// export async function getStaticProps(context) {
//   const users = await fetch("api/user")
//     .then((res) => res.json())
//     .then((final) => final);

//   return {
//     props: {
//       listUsers: users,
//     },
//   };
// }
