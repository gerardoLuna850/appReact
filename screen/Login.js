import React, {Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";
import {StyleSheet} from 'react-native';


class Login extends Component {
  //crear las variables para pasar los datos
  constructor(props) {
    super(props);
    this.state = {usuario: '', pass: ''};
  }


    render(){
      //variable para navegar usada en el onpress
      const navigation = this.props.navigation;
  return (
      <>
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style = {misEstilos.textCenter} >Iniciar session</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                  
                  
                    <Item lineLabel>
                      <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
                      <Input type="text" placeholder="Usuario" value= {this.state.usuario} onChangeText= {(usuario) => this.setState({usuario})}/>
                    </Item>
                    
                
                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    <Input type="text" placeholder = 'Constraseña' value= {this.state.pass} onChangeText= {(pass) => this.setState({pass})}/>
                  </Item>
                    

              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button  onPress={() => navigation.navigate('detalles', {usuario: this.state.usuario, pass: this.state.pass})} primary style = { misEstilos.centrar}><Text> Iniciar </Text></Button>
            </CardItem>


            <CardItem footer bordered style = { misEstilos.pie}>
            <Text>Ya tienes cuenta? Registrate</Text>
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
  }
});

export default Login;