import Link from "next/link";
import { useState } from "react";
import {
  Container,
  ButtonMenu,
  ButtonNewCurriculum,
  Links,
  Anchor,
} from "../../styles/components/HeaderStyle";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Container isOpen={isOpenMenu}>
      <div>
        <img src="assets/logo-ok.png" alt="iJob" />
        {/* <ButtonNewCurriculum>Novo currículo</ButtonNewCurriculum> */}
        <ButtonMenu onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <img src="assets/menu.svg" alt="" />
        </ButtonMenu>
      </div>

      <div>
        <nav>
          <Links>
            <li>
              <Link href="/home">
                <Anchor active={true}>Home</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <Anchor active={false}>Contato</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <Anchor active={false}>Sobre nós</Anchor>
              </Link>
            </li>
          </Links>
        </nav>
        <img src="assets/imagemOK.png" alt="Perfil" />
      </div>
    </Container>
  );
}
