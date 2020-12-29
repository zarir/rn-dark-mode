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

<h2 align="center">React Native Dark Mode</h3>

rn-dark-mode

<h3>Installation</h3>

For rn-dark-mode library to work you need to install react-native-appearance dependency in your project

Using npm:
```sh
npm install react-native-appearance
```

or using yarn:
```sh
yarn add react-native-appearance
```

Please refer the <a href="https://github.com/expo/react-native-appearance">docs</a> for linking

<h3>Preview</h3>
[![Demo screenshot][demo-screenshot]]((https://demo.com))

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
```



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[demo-screenshot]: demo.gif

