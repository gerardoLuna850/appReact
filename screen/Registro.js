import React,{ Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";
import {StyleSheet, Alert} from 'react-native';
import api from '../data/api'

class Registro extends Component {
  constructor(props){
    super(props);
    this.state={
      correo: '',
      user: '',
      pass: ''
    }
  }

  registro = () => {
    const {correo} = this.state;
    const {user} = this.state;
    const {pass} = this.state;

    fetch('http://172.18.44.65/iot/data/registrar.php',{
    method: 'post',
    header: {
      'Acept': 'application.json',
      'Content-type': 'applicatio/json'
    },
    body: JSON.stringify({
      pCorreo: correo,
      pUser: user,
      pPass: pass

    })
  })
  .then((response) => response.text())
  .then((responseData) =>{
    if(responseData == 1){
      this.props.navigation.navigate('Principal');
    }else{
      Alert.alert("Registro NO exitoso")
    }

  })
    .catch((error)=>{
      console.error(error);
    });
  
  }
    render(){
      const navegar = this.props.navigation;
  return (
      <>
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style = {misEstilos.textCenter} >Registro</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                  
                  
                    <Item lineLabel>
                      <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
                      <Input placeholder= 'Correo' onChangeText = {(correo) => this.setState({correo})}/>
                    </Item>
                  
                  
                  
                  <Item lineLabel>
                    <Icon type = 'Entypo' name = 'email'></Icon>
                    <Input placeholder = 'Usuario' onChangeText = {(user) => this.setState({user})}/>
                  </Item>

                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    <Input placeholder = 'Constraseña' onChangeText = {(pass) => this.setState({pass})}/>
                  </Item>


              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button primary style = { misEstilos.centrar} onPress={() => navegar.navigate("Login")}><Text> Registrate </Text></Button>
            <Button success style = {misEstilos.boton} onPress = {this.registro}><Text>Guardar</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container> 
    </>
    
  );
    }
};




const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%'
  },

  pie: {
    justifyContent: 'center'
  },

  centrar: {
    flex: 1,
    
    justifyContent: 'center'
  },

  body: {
    paddingVertical: 35,
  },
  boton: {
    textAlign: 'center',
  }
});

export default Registro;