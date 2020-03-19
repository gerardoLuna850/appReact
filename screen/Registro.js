import React,{ Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";
import {StyleSheet} from 'react-native';


class Registro extends Component {
    render(){
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
                      <Input placeholder= 'Username'/>
                    </Item>
                  
                  
                  
                  <Item lineLabel>
                    <Icon type = 'Entypo' name = 'email'></Icon>
                    <Input placeholder = 'Correo'/>
                  </Item>

                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    <Input placeholder = 'Constraseña'/>
                  </Item>


              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button primary style = { misEstilos.centrar}><Text> Registrate </Text></Button>
           
            



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

export default Registro;