import '../styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Component 
          {...pageProps} 
          lang={lang} 
          setLang={setLang} 
          theme={theme} 
          setTheme={setTheme} 
        />
      </div>
    </div>
  );
}