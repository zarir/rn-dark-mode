import React, {createContext, useState, useEffect} from 'react';
import {StatusBar, Appearance} from 'react-native';
import {light, dark} from './themes';

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode) => console.log(mode),
  colors: Appearance.getColorScheme() === 'dark' ? dark : light,
});

export const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({children}) => {
  const [themeState, setThemeState] = useState(defaultMode);
  const setMode = (mode) => {
    setThemeState(mode);
  };
  useEffect(() => {
    const appearanceListener = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme);
    });
    return () => appearanceListener.remove();
  }, []);

  const defaultTheme = {
    mode: themeState,
    setMode,
    colors: themeState === 'dark' ? dark : light,
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <StatusBar
        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
