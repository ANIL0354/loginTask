import React from 'react';
import Navigation from './src/navigations';
import { SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
  );
}
