import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native'

class App extends React.Component{
    constructor(props){
        this.state = {
            nome = '',

        }
    }

    componentDidMount(){

        const response = fetch(`http://${ServerIp}:4001/produtos`);

        const produtos = response.json();

        this.setState({produtos})
        )
    }

    render(){
        console.log(this.state);
        return(
            <View>
                <Text>teste</Text>
            </View>
        )
    }


}
