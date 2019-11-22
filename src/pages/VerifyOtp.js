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
  Text,
  Right,
} from 'native-base';
import {StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class VerifyOtp extends Component {
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
          <Right />
        </Header>
        <Content>
          <Text style={styles.loginHeading}>Verify Otp</Text>
          <List>
            <ListItem>
              <InputGroup>
                <MaterialIcon name="onepassword" style={styles.emailIpt} />
                <Input
                  placeholder="Please Enter Your Otp "
                  placeholderTextColor="#fff"
                  style={{color: '#fff'}}
                />
              </InputGroup>
            </ListItem>
          </List>
          <Button
            style={styles.registerBtn}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.btnText}>Verify Otp</Text>
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
  emailIpt: {color: '#fff', fontSize: 25},
  loginHeading: {
    fontSize: 35,
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: '#fff',
  },
  btnText: {color: '#FF66CC'},
});
