import {View, Text} from 'react-native'
import React from 'react';

export default class ColorListItem extends React.Component {

    render(){
        return(
            <View style={{backgroundColor:this.props.color.color,height:42}}>
                <Text style={{color:'white'}}>{this.props.color.name}</Text>
            </View>
        )
    }
}