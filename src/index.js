import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Headline} from './components/headlineTabs/Headline';

export class App extends Component {
  render() {
    return <Headline />;
  }
}
