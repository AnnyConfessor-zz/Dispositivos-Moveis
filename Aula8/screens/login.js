import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from "react-native-vector-icons";

import { StyleSheet, Text, View, Button } from 'react-native';

class Login extends React.Component {
    render() {
        return (
            <View style={{width: 100, height: 100, backgroundColor: '#ff0000'}}>
                <Button
                onPress = {() => this.props.navigation.navigate('Home')}
                tittle = "Fazer login"/>
            </View>
        );
    }
}

export default Login


{/* contém as duas páginas de stacks, a inicial com o drawer e o stack e a de login (primeira) */}
const stackNavigator = createStackNavigator({
    Drawer: {
        headerLeft:
         <Icon 
         style={{}}
         onPress = {() => navigation.toggleDrawer()} />
    }
})

export default createAppContainer(stackNavigator)