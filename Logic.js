import {AsyncStorage} from "react-native";

export function removeColor(name) {
    let currentColors = this.state.colors;
    this.setState({colors: currentColors.filter(item => item.color !== name)}, () => {
        this.addToAsyncStorage()
    })
}

export function addColor() {
    let currentColors = this.state.colors;
    currentColors.push({color: this.state.currentColorName});
    this.setState({currentColorName: '', colors: currentColors}, () => {
        this.addToAsyncStorage()
    });
}

export function addToAsyncStorage() {
    AsyncStorage.setItem('colors', JSON.stringify(this.state.colors));
}

export function readFromAsyncStorage() {
    AsyncStorage.getItem('colors').then((val) => {
        if (val !== null && val !== undefined) {
            this.setState({colors: JSON.parse(val)})
        }
    });
}