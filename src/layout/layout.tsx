import { ReactNode } from 'react';
import NavbarMain from './navbar/NavbarMain';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <NavbarMain />
      {children}
    </>
  );
}

export default Layout;