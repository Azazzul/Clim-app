import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Connexion from './src/Screens/Connexion';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea5430',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    flex: 1,
    backgroundColor: '#ea5430',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 23,
    fontWeight: '800',
  },
  input: {
    width: '70%',
    height: 40,
    backgroundColor: '#FFF',
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 17,
  },
  logo: {
    maxWidth: '58%',
    resizeMode: 'contain',
    marginBottom: 0,
  },
});

const Animation = () => {
  return <Lottie source={require('./src/splash.json')} autoPlay loop />;
};
const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [user, setUser] = useState('');

  const width = new Animated.Value(0);
  const height = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(width, {
      toValue: 360,
      duration: 1200,
      useNativeDriver: false,
    }).start();

    Animated.timing(height, {
      toValue: 100,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, [height, width]);

  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      Hide_Splash_Screen();
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);

  const Splash_Screen = () => {
    return (
      <View style={styles.lottie}>
        <Animation />
      </View>
    );
  };

  const setUserState = state => {
    setUser(state);
  };

  return (
    <>
      {isVisible === true ? (
        Splash_Screen()
      ) : (
        <>
          {user === '' ? (
            <Connexion setUserState={setUserState} />
          ) : (
            <Text> user </Text>
          )}
        </>
      )}
    </>
  );
};

export default App;
