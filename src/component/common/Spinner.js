import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    const { containerSpinner } = styles;

    return (
        <View style={containerSpinner} >
            <ActivityIndicator size={size || 'large'} />
            <Text>Loading...</Text>
        </View >
    );
};

const styles = {
    containerSpinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export { Spinner };
