/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from './src/Button';
import Button1 from './src/Button1';

const App: () => React$Node = () => {
  return (
    <View style={{ padding: 15 }}>
      <Button label="Helloaslkdasd sad sadsad asd sda dad sadas ddad asdasd asda das dasd asd asd asdas dasdasdasdsada" />
      <Button1 label="This is the second button" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
