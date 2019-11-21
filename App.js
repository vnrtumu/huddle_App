import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/HomeScreen';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Tasks from './src/pages/Tasks';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    Register: Register,
    Task: Tasks,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
