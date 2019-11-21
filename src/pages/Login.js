import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Button,
  Header,
  Left,
  Right,
  Text,
} from 'native-base';
import {StyleSheet} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.loginContainer}>
        <Header transparent>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="close" />
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Forget Password</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={styles.loginHeading}>Login</Text>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail" style={styles.emailIpt} />
                <Input
                  placeholder="EMAIL"
                  placeholderTextColor="#fff"
                  style={{color: '#fff'}}
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={styles.passIpt} />
                <Input
                  placeholder="PASSWORD"
                  placeholderTextColor="#fff"
                  secureTextEntry
                  style={{color: '#fff'}}
                />
              </InputGroup>
            </ListItem>
          </List>
          <Button
            style={styles.registerBtn}
            onPress={() => this.props.navigation.navigate('Task')}>
            <Text style={styles.btnText}>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#FF66CC',
    justifyContent: 'center',
  },
  registerBtn: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  passIpt: {color: '#fff'},
  emailIpt: {color: '#fff'},
  loginHeading: {
    fontSize: 45,
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: '#fff',
  },
  btnText: {color: '#FF66CC'},
});
