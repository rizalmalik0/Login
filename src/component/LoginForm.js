import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardItem, Button, Input, Spinner } from './common';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '', error: '', loading: false };
    }

    onPressLogin() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            loading: false,
            error: 'Authentication failed'
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return <Button onPress={this.onPressLogin.bind(this)}>Login</Button>;
    }

    render() {
        return (
            <View>
                <Card>
                    <CardItem>
                        <Input
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder="Email"
                        />
                    </CardItem>
                    <CardItem>
                        <Input
                            secureTextEntry
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="Password"
                        />
                    </CardItem>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    <CardItem>
                        {this.renderButton()}
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};
