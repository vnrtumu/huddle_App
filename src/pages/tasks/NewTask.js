import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Card, Button} from 'native-base';
import TaskTable from '../../components/TaskTable';

import Icon from 'react-native-vector-icons/Entypo';

export default class NewTask extends Component {
  render() {
    return (
      <View style={styles.newContainer}>
        <View>
          <Card style={styles.addTaskbtncontiner}>
            <Button transparent>
              <Icon name="circle-with-plus" style={styles.addTaskbtn} />
              <Text style={styles.addTasktext}>Create New Task</Text>
            </Button>
          </Card>
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
  addTaskbtncontiner: {
    marginTop: 15,
  },
  addTaskbtn: {
    fontSize: 30,
    marginHorizontal: 10,
    color: 'green',
  },
  addTasktext: {
    fontSize: 22,
    color: '#ff66cc',
  },
  table: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
});
