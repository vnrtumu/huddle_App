import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import TaskTable from '../../components/TaskTable';


export default class OnholdTask extends Component {
  render() {
    return (
      <View style={styles.newContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headText}>On Hold Tasks</Text>
        </View>
        <View style={styles.table}>
          <TaskTable />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 15,
  },
  headText: {
    fontSize: 32,
  },
  table: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
});
