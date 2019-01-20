/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import ColorListItem from './ColorListItem'
import Input from "./Input";
import * as Logic from './Logic'
import styles from './App.styles';


export default class App extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            currentColorName: ''
        };
        this.addColor = Logic.addColor.bind(this);
        this.removeColor = Logic.removeColor.bind(this);
        this.addToAsyncStorage = Logic.addToAsyncStorage.bind(this);
        this.readFromAsyncStorage = Logic.readFromAsyncStorage.bind(this);
    }

    componentDidMount() {
        this.readFromAsyncStorage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    value={this.state.currentColorName}
                    onChangeText={(text) => {
                        this.setState({currentColorName: text})
                    }}
                    addColor={this.addColor}
                />
                <FlatList
                    style={{flex: 1, width: '100%'}}
                    data={this.state.colors}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({item}) => this.renderColorItem(item)}
                />
            </View>
        );
    }

    renderColorItem(item) {
        return (
            <ColorListItem
                color={item}
                onRemovePress={(name) => this.removeColor(name)}
            />
        )
    }
}
