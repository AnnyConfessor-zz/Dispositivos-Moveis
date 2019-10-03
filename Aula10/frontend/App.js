import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';

const serverIp = '192.168.100.4'  //coloque o ip do seu pc aqui. o servidor backend deve estar rodando no seu pc para o app funcionar

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			marcas: []
		}
		this.renderItem = this.renderItem.bind(this)
	}
	
	async componentDidMount() {
		try {
			const requestInfo = {
				method: 'GET'
			}
			
			const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`, requestInfo);
			
 			const marcas = await response.json();
		
			this.setState({marcas})
		} catch(e) {
			console.log(e)
		}
	}
	
	
	renderItem(item) {
		return (
			<View style={styles.listItem}>
				<Text>{item.nome}</Text>
			</View>
		)
	}
	
	
	render() {
		return (
			<View style = {styles.container}>
				<View style={styles.list}>
					<FlatList
						data={this.state.marcas}
						renderItem={({ item }) => this.renderItem(item)}
						keyExtractor={item => item.codigo}
					/>
				</View>
			 </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 23
	},
	list: {
		flex: 1
	},
	listItem: {
		flexDirection: 'row',
		padding: 20,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	}
})

export default App