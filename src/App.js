import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyA-XJYcuz9Hx_v8dc2uoteIBoQIgRq5QLI',
                authDomain: 'auth-5dcbb.firebaseapp.com',
                databaseURL: 'https://auth-5dcbb.firebaseio.com',
                projectId: 'auth-5dcbb',
                storageBucket: 'auth-5dcbb.appspot.com',
                messagingSenderId: '698048920293'
            });
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    signOut() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={this.signOut}>Logout</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftIcon={require('../images/menu.png')}
                    rightIcon={require('../images/menu.png')}
                    headerTitle="Login Form" 
                />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
