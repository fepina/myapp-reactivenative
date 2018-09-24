import React from 'react';
import { Button, View,StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.descricao}>Olá, bem-vindo a AV1. Clique no botão abaixo</Text>
        <Button
          title="Ir para tela 2"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
    fontSize: 40,
  },
  pcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcc',
    fontSize: 40,
  },
  descricao:{
    padding:15,},
  });

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.pcontainer}>
        <Text style={styles.descricao}>Nome: Fernanda</Text>
<Text style={styles.descricao}>Matricula: 0050014825</Text>
<Text style={styles.descricao}>
https://github.com/fepina/myapp-reactivenative
</Text>
        <Button
          title="Ir para tela 1"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    avigationOptions: () => ({
      title: `Inovação Projeto integrado`
    }),
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
   static navigationOptions ={
        title:'Inovação Projeto Integrado'}
  render() {
    return <RootStack />;
  }
}
