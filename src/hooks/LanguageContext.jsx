import React, { createContext, useState } from 'react';

// 創建 Context
export const LanguageContext = createContext();

// 創建 Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh'); // 默認語言為中文

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
