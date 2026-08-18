import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className={`flex-1 ${isHome ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
