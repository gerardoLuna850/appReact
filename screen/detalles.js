import React, {Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";
import {StyleSheet} from 'react-native';


class Login extends Component {

    render(){
      //variable para navegar usada en el onpress
      //const navigation = this.props.navigation;
  return (
      <>
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style = {misEstilos.textCenter} >Bienvenidp</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                  
                  <View>
                      {/* Variabled que traemos de la pantalla anterior*/}
                  <Text >Usuario: {this.props.route.params.usuario}</Text>
                  <Text >{this.props.route.params.pass}</Text>
                  </View>
                    
                

              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
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