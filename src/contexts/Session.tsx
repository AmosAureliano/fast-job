import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export default function Auth({ children }: Props) {
  const router = useRouter();

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const url = router.pathname;

    try {
      const storageUser = localStorage.getItem('fastjobs');

      // if (storageUser) {
      //   if (url == '/signIn') {
      //     router.replace('/home');
      //   }
      // }
    } catch (error) {
      // router.replace('/signIn');
    }
    setShowContent(true);
  }, []);

  async function signIn(user: User) {
    localStorage.setItem('user@fastjobs', JSON.stringify(user));
  }

  // Logout account
  async function signOut() {
    localStorage.removeItem('user@fastjobs');
  }

  if (showContent) {
    return children as ReactElement;
  }

  return <Loading />;
}

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.5);

  svg {
    color: var(--primary);
    font-size: 40px !important;
    transform: rotate(45deg);
    animation: antRotate 1.2s infinite linear;
  }
`;
