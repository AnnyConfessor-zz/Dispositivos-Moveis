import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bem vindo ao Home!</Text>
      </View>
    );
  }
}

class Contato extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>(84)91234-5678</Text>
      </View>
    );
  }
}

const drawerNavigator = createDrawerNavigator({
  Home,
  Contato
})

const stackNavitor = createStackNavigator({
  Drawer: {
    screen: drawerNavigator,
    navigationOptions: ({navigation}) => ({
      headerLeft: 
        <Icon style={styles.draweIcon} 
          name="menu" size={24}
          onPress={() => navigation.toggleDrawer()}/>
    })
  }
})

export default createAppContainer(stackNavitor)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  draweIcon: {
    marginLeft: 15
  }
});
