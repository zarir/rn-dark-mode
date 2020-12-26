import React, {createContext, useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Appearance, AppearanceProvider} from 'react-native-appearance';
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
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  const defaultTheme = {
    mode: themeState,
    setMode,
    colors: themeState === 'dark' ? dark : light,
  };

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={defaultTheme}>
        <StatusBar
          barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
        />
        {children}
      </ThemeContext.Provider>
    </AppearanceProvider>
  );
};

export default ThemeProvider;
