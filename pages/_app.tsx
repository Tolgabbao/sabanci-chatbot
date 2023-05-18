import React from 'react';
import { AppProps } from 'next/app';
import ReactDOM from 'react-dom';
import '@/styles/base.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes"

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});


function MyApp({ Component, pageProps }: AppProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rootRef.current) {
      ReactDOM.render(
        <React.StrictMode>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </React.StrictMode>,
        rootRef.current
      );
    }
  }, [Component, pageProps]);

  return (
    <>
      <div id="root" ref={rootRef}>
        <main className={inter.variable}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </main>
      </div>
    </>
  );
}

export default MyApp;
