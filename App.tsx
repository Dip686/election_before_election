/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
// import ElectionCardView from './components/candidate-table';
import LandingPage from './components/landing-page';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <LandingPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
