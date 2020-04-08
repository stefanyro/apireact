import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


export default class Pedidos extends Component {

    render() {
        return (
            <View style={styles.container}>
                <text> PEDIDOS </text>
                <View>
                    <Image source={{ uri: 'https://metrocolombiafood.vteximg.com.br/arquivos/ids/159697-1000-1000/7707280883790-1.jpg?v=636670251155670000' }}
                        style={{ width: 150, height: 150 }} />
                </View>
                <View>
                    <Text><h3>Cantidad</h3></Text>
                    <Text>1</Text>
                    <Text><h3>Valor unitario</h3></Text>
                    <Text>$10.000</Text>
                    <Text><h3>Valor total</h3></Text>
                    <Text>$10.000</Text>
                </View>
                <View>
                    <Button
                        onPress={() => {
                            navigation.navigate('pedidos');
                        }}
                        title="Comprar"
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
