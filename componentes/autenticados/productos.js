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
                                <th scope="col">codigo</th>
                                <th scope="col">precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>cafe</td>
                                <td>124ca</td>
                                <td>10.000</td>
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
