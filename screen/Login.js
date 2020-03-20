import React, {Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";
import {StyleSheet, Alert} from 'react-native';


class Login extends Component {
  //crear las variables para pasar los datos
  constructor(props) {
    super(props);
    this.state = {
      user: '',
       pass: ''
      };
  }

  userLog = () =>{ 
    //  alert('ok');
    const {user} = this.state;
    const {pass} = this.state;

    fetch('http://172.18.44.65/iot/data/login.php',{ 
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        pUser: user,
        pPass: pass
      })

    })
    .then((response) => response.text())
      .then((responseData) =>{
        alert(responseData);
        if(responseData == 1){
             this.props.navigation.navigate('Principal');
        }else{
          Alert.alert("Usuario o contraseña invalida")
        }
        
      })
      .catch((error)=>{
          console.error(error);
      });
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
                      <Input type="text" placeholder="usuario" value= {this.state.user} onChangeText= {(user) => this.setState({user})}/>
                    </Item>
                    
                
                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    <Input type="text" placeholder = 'Constraseña' value= {this.state.pass} onChangeText= {(pass) => this.setState({pass})}/>
                  </Item>
                    

              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button  success style = {misEstilos.boton} onPress = {this.userLog}><Text> Iniciar </Text></Button>
            </CardItem>


            <CardItem footer bordered style = { misEstilos.pie}>
            <Button  onPress={() => navigation.navigate('Registro')} primary style = { misEstilos.centrar}><Text> Registrarse </Text></Button>
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