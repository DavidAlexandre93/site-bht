import React, { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext();

const translations = {
  'en': {
    greeting: "Hello",
  },
  'fr': {
    greeting: "Bonjour",
  },
  'es': {
    greeting: "Hola",
  },
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Isso força a re-renderização dos componentes consumidores quando o idioma muda
    document.documentElement.lang = lang;
  }, [lang]);

  const translate = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LangContext.Provider value={{ setLang, translate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
