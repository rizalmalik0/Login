//import
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput
} from 'react-native';

//Component
export default class CustomInputText extends Component {
    render() {
        return (
            <View style={styles.customInputView}>
                <Image source={this.props.iconPath} style={styles.imgInput} />
                <TextInput style={styles.inputStyle}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    customInputView: {
        alignSelf: 'stretch',
        margin: 5,
    },
    imgInput: {
        width: 20, 
        height: 20,
        marginTop: 8,
        marginLeft: 5,
        position: 'absolute',
    },
    inputStyle: {
        height: 40,
        paddingLeft: 30,
    }
});