import {View, Text,TouchableOpacity} from 'react-native'
import React from 'react';

export default (props) => {
    return (
        <View style={{backgroundColor:props.color.color,height:46,flexDirection:'row'}}>
            <Text style={{color:'white',flex:1}}>{props.color.color}</Text>
            <TouchableOpacity
                onPress={()=>props.onRemovePress(props.color.color)}
                style={{backgroundColor: 'red', height: 46, width: 42,alignItems:'center',justifyContent:'center'}}
            >
                <Text style={{color: 'white'}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}