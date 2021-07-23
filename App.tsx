import React from 'react';
import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjecModelScreen } from './src/screens/BoxObjecModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>

      <PositionScreen/>
      {/* <DimensionesScreen/> */}
      {/* <BoxObjecModelScreen/> */}
      {/* // <HolaMundoScreen/>
      // <CounterScreen/> */}
    </SafeAreaView>
  )
}

export default App;
