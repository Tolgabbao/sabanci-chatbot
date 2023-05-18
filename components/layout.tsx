import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { config } from '../config/config';
import ThemeSwitch from './darkmode';
import { ThemeProvider } from 'next-themes'


initializeApp(config.firebaseConfig);

interface LayoutProps {
  children?: React.ReactNode;
}


//redirect to login page and logout
const handleLogout = () => {
  signOut(getAuth());
  console.log('logging out');
  window.location.href = '/login';
}


export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-5">
      <header className="container sticky top-0 z-40">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-6 pl-6">
              <button onClick={() => handleLogout()}>
                Theme
              </button>
              <span className="mx-3">|</span>
                <ThemeSwitch/>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
