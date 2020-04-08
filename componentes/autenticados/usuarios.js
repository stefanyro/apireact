import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Table } from 'react-native';


export default class Usuarios extends Component {

    render() {
        return (
            <View style={styles.container}>
                <text> Usuarios </text>
                <View>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">nombre</th>
                                <th scope="col">apellido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>maria</td>
                                <td>rojas</td>
                            </tr>
                        </tbody>
                    </table>
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
