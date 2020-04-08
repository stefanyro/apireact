import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
//import {RutasNoAutentificadas} from './componentes/noAutenticados/rutasNoAutentificadas';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text><h3>Administrador</h3></Text>
        <View>
          <Image source={{ uri: 'https://i.pinimg.com/originals/ea/09/f5/ea09f52b076c1ac82ed7a8aa5ddc5091.png' }}
            style={{ width: 150, height: 150 }} />
        </View>
        <View>
          <Text>Usuario</Text>
          <TextInput id="user"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
          <Text>Contraseña</Text>
          <TextInput id="pass"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
        </View>
        <View>
          <br />
          <Button
            onPress={() => {
              navigation.navigate('productos');
            }}
            title="Ingresar"
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
