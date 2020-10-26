import React, { useEffect, useState } from 'react';

import { useAuth, DecodeUser } from 'hooks/auth';

import Header from 'components/Header';
import Content from 'components/Content';

import * as s from './styles';
import Footer from 'components/Footer';

const LayoutContainer: React.FC = ({ children }) => {
  const [userLogged, setUserLogged] = useState<DecodeUser>({} as DecodeUser);
  const { getSession, signOut } = useAuth();

  useEffect(() => {
    const user = getSession();
    setUserLogged(user);
  }, [getSession]);

  return (
    <s.LayoutContainer>
      <Header
        userName={userLogged.name}
        logout={signOut}
      />
      <Content>{children}</Content>
      <Footer />
    </s.LayoutContainer>
  );
};

export default LayoutContainer;
