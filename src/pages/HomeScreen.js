import React, {Component} from 'react';
import {StyleSheet, Image, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Right,
  Body,
  Icon,
  Text,
  Card,
} from 'native-base';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// import Login from './src/pages/Login';
// import Register from './src/pages/Register';

export default class HomeScreen extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Container style={styles.coverContainer}>
        <Header transparent>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Login</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Card transparent>
            <Image source={require('../images/logo.png')} style={styles.logo} />
            <Body>
              <Text style={styles.welcome}>Welcome To Huddle Meeting</Text>
            </Body>
            <Button
              rounded
              light
              style={styles.facebook}
              onPress={() => this.props.navigation.navigate('Task')}>
              <Icon name="home" style={styles.facebookIcon} />
              <Text style={styles.facebookText}>Continue With Facebook</Text>
            </Button>
            <Button
              bordered
              rounded
              light
              style={styles.createAccount}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.createText}>Create Account</Text>
            </Button>
            <Text style={styles.moreOptions}>More options</Text>
            <Text style={styles.moreOptionsText}>
              By tapping on Continue, Create Account or More Options, I agree to
              Huddle Meeting's Terms of Service.
            </Text>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    backgroundColor: '#FF66CC',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: null,
    flex: 1,
  },
  facebook: {
    marginHorizontal: 20,
  },
  facebookText: {
    color: '#FF66CC',
    fontVariant: ['small-caps'],
    fontSize: 18,
  },
  facebookIcon: {
    color: '#FF66CC',
  },
  createAccount: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  createText: {
    color: '#fff',
    fontSize: 18,
  },
  welcome: {
    fontSize: 22,
    color: '#fff',
    paddingBottom: 20,
  },
  moreOptions: {
    fontSize: 22,
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  moreOptionsText: {
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
