import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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

export default class Register extends Component {
  render() {
    return (
      <Container style={styles.registerContianer}>
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
              <Text>Login</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={styles.loginHeading}>Register</Text>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{color: '#fff'}} />
                <Input
                  inlineLabel
                  label="First Name"
                  placeholder="Enter Your Name"
                  placeholderTextColor="#fff"
                  style={{color: '#fff'}}
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail" style={{color: '#fff'}} />
                <Input
                  placeholder="EMAIL"
                  placeholderTextColor="#fff"
                  style={{color: '#fff'}}
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-call" style={{color: '#fff'}} />
                <Input
                  placeholder="PHONE"
                  keyboardType="numeric"
                  placeholderTextColor="#fff"
                  style={{color: '#fff'}}
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{color: '#fff'}} />
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
            <Text style={styles.btnText}>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  registerContianer: {
    flex: 1,
    backgroundColor: '#FF66CC',
    justifyContent: 'center',
  },
  registerBtn: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#FF66CC',
  },
  passIpt: {color: '#0A69FE'},
  emailIpt: {color: '#0A69FE'},
  loginHeading: {
    fontSize: 45,
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: '#fff',
  },
  btnText: {color: '#FF66CC'},
});
