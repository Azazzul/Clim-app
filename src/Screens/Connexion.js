import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Inscription from './Inscription';

const Connexion = ({setUserState}) => {
  const [isRegister, setRegister] = useState(true);
  const [username, setUsername] = useState('');

  const Logo = () => {
    return <Image source={require('../img/logo.png')} style={styles.logo} />;
  };

  const changeUsername = name => {
    setUsername(name);
  };

  const changeName = () => {
    if (username) {
      setUserState(username);
    }
  };
  const changeToRegisterScreen = () => {
    setRegister(false);
  };
  const CustomButton = props => {
    const {title = 'save'} = props;
    return (
      <Pressable style={styles.button} onPress={changeName}>
        <Text style={styles.textButton}> {title} </Text>
      </Pressable>
    );
  };

  const ConnexionScreen = () => {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Clim'app</Text>
        <TextInput
          style={styles.input}
          value={username}
          onTextInput={t => changeUsername(t)}
          placeholderTextColor={959595}
          placeholder="Addresse mail"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor={959595}
          placeholder="Mot de passe"
        />
        <CustomButton title="Se connecter" />
        <Text> Vous n'avez pas de compte ?</Text>
        <Pressable onPress={changeToRegisterScreen}>
          <Text> inscrivez vous</Text>
        </Pressable>
        <Text> {isRegister}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ea5430',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      color: '#FFF',
      fontFamily: 'Noto Sans HK',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 36,
      lineHeight: 52,
      textAlign: 'center',
      marginBottom: 29,
    },
    input: {
      width: '70%',
      height: 40,
      backgroundColor: '#FFF',
      paddingHorizontal: 10,
      borderRadius: 4,
      marginBottom: 17,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    logo: {
      maxWidth: '52%',
      maxHeight: '30%',
      marginTop: '20%',
      marginBottom: '2%',
      resizeMode: 'contain',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'white',
    },
    textButton: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#ea5430',
    },
    link: {},
  });
  return (
    <>
      <ConnexionScreen />
    </>
  );
};
export default Connexion;
