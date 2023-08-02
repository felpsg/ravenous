import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
