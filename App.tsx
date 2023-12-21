/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LottieView from 'lottie-react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ProgressBarAndroid
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{marginTop:50,alignItems: "center", justifyContent: "center"}}>
      <LottieView source={require("./assets/merry1.json")} autoPlay loop style={{height: 150, width: 150}} />
      <LottieView source={require("./assets/gifts.json")} autoPlay loop style={{height: 150, width: 150}} />
      {/* <LottieView source={require("./assets/lottie.json")} autoPlay loop style={{height: 150, width: 150}} /> */}

      <ProgressBarAndroid styleAttr="Horizontal"
       indeterminate={false}
       progress={0.5} 
       color="#2196F3" />
    </View>
  );
}


export default App;
