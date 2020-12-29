<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<h1 align="center">React Native Dark Mode</h1>

<!-- ABOUT THE PROJECT -->
<h3> About The Project</h3>

Allows application to detect dark mode on users device using react-native-appearance. Also lets the user to override the system settings for dark mode.

<h3>Installation</h3>

This library requires react-native-appearance dependency in your project

Using npm:
```sh
npm install react-native-appearance
```

or using yarn:
```sh
yarn add react-native-appearance
```

Check intallation instructions for expo and bare react native projects at <a target="_blank" href="https://github.com/expo/react-native-appearance">https://github.com/expo/react-native-appearance</a>

<h3>Preview</h3>
<img src="https://github.com/zarir/rn-dark-mode/blob/master/demo.gif" alt="Showcase iOS" width="200" height="433">

<h3>Usage</h3>

1. Import theme folder in your project

```sh
import ThemeProvider from './theme';
```

2. Wrap your root level component with ```sh<ThemeProvider>``` component

```sh
<ThemeProvider>
  <Root />
</ThemeProvider>
```

3. The theme folder has themes.js file which contains the light and dark theme colors

```sh
export const light = {
  background: '#FFFFFF',
  text: '#121212',
};

export const dark = {
  background: '#1A1A1A',
  text: '#FFFFFF',
};
```

<h3>Example</h3>

```sh

// App.js

import React from 'react';
import ThemeProvider from './theme';
import Home from './Home';

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;


// Home.js

import React from 'react';
import {useTheme} from './theme';
import {View, Text, Switch} from 'react-native';

const Home = () => {
  const {mode, setMode, colors} = useTheme();

  const styles = {
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    textStyle: {
      color: colors.text,
      padding: 10,
    },
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        {mode === 'dark' ? 'Dark mode' : 'Light mode'}
      </Text>
      <Switch
        value={mode === 'dark'}
        onValueChange={(value) => setMode(value ? 'dark' : 'light')}
      />
    </View>
  );
};

export default Home;
```
<h3>Acknowledgements</h3>

1. <a target="_blank" href="https://github.com/RatebSeirawan/rn-theming">rn-theming</a>

2. <a target="_blank" href="https://blog.crowdbotics.com/how-to-add-support-for-dark-and-light-themes-in-react-native-apps/">https://blog.crowdbotics.com/how-to-add-support-for-dark-and-light-themes-in-react-native-apps/</a>



