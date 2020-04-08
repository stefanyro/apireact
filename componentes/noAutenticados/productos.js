import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


export default class Productos extends Component {

    render() {
        return (
            <View style={styles.container}>
                <text> PRODUCTOS </text>
                <View>
                    <Image source={{ uri: 'https://metrocolombiafood.vteximg.com.br/arquivos/ids/159697-1000-1000/7707280883790-1.jpg?v=636670251155670000' }}
                        style={{ width: 150, height: 150 }} />
                </View>
                <View>
                    <Text><h3>Nombre</h3></Text>
                    <Text>Premiun selection</Text>
                    <Text><h3>Precio</h3></Text>
                    <Text>$10.000</Text>
                </View>
                <View>
                    <Button
                        onPress={() => {
                            navigation.navigate('pedidos');
                        }}
                        title="Agregar al carrito"
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
