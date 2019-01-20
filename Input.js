import {View, Text,TouchableOpacity, TextInput} from 'react-native'
import React from 'react';

export default (props)=>(
    <View style={{flexDirection: 'row', width: '100%'}}>
        <TextInput
            style={{height: 42, flex: 1}}
            onChangeText={(text) => props.onChangeText(text)}
            value={props.value}
        />
        <TouchableOpacity
            onPress={() => props.addColor()}
            style={{
                backgroundColor: 'orange',
                height: 42,
                width: 42,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{color: 'white'}}>+</Text>
        </TouchableOpacity>
    </View>
)