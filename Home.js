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
