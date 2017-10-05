import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle, buttonContainerStyles } = styles;

    return (
        <View style={buttonContainerStyles}>
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#76C5DA',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        // flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#76C5DA',
        marginLeft: 5,
        marginRight: 5,
    },
    buttonContainerStyles: {
        flex: 1,
        marginTop: 5
    }
}

export { Button };