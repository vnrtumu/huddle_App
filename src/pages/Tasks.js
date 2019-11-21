import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import NewTask from './tasks/NewTask';
import ContinuedTask from './tasks/Continued';
import PendingTask from './tasks/Pending';
import OnholdTask from './tasks/Onhold';
import CompletedTask from './tasks/Completed';

const RootStack = createBottomTabNavigator(
  {
    New: {
      screen: NewTask,
      navigationOptions: {
        tabBarLabel: 'New',
        tabBarIcon: ({tintColor}) => (
          <Icon name="new-message" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Continued: {
      screen: ContinuedTask,
      navigationOptions: {
        tabBarLabel: 'Continued',
        tabBarIcon: ({tintColor}) => (
          <Icon name="controller-next" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Pending: {
      screen: PendingTask,
      navigationOptions: {
        tabBarLabel: 'Pending',
        tabBarIcon: ({tintColor}) => (
          <Material name="lan-pending" size={26} style={{color: tintColor}} />
        ),
      },
    },
    OnHold: {
      screen: OnholdTask,
      navigationOptions: {
        tabBarLabel: 'Onhold',
        tabBarIcon: ({tintColor}) => (
          <Icon name="controller-paus" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Completed: {
      screen: CompletedTask,
      navigationOptions: {
        tabBarLabel: 'Completed',
        tabBarIcon: ({tintColor}) => (
          <Icon name="controller-stop" size={26} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    initialRouteName: 'New',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class Tasks extends Component {
  render() {
    return <AppContainer />;
  }
}
