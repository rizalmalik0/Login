import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerView}>
            <Image source={props.leftIcon} style={{marginLeft:10, height:20, width: 20}}/>
            <Text style={styles.headerText}>{props.headerTitle}</Text>
            <Image source={props.rightIcon} style={{marginRight:10, height:20, width: 20}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        height: 48,
        backgroundColor: '#76C5D8',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#bdc3c7',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ecf0f1',
    }
});

export { Header };