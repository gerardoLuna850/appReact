//Aqui va la otra API
import React, {Component} from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

class OtrasP extends Component{
    //generar los atributos
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            pokemon: [],
            url: 'https://pokeapi.co/api/v2/pokemon/'
        }
    }

     componentDidMount(){
        this.getPokemon();

    }
    getPokemon = () => {
        this.setState({loading: true})
        //realiza la peticion
        fetch(this.state.url)
        //cuando nos responda el servidor tomamons la respuesta y la convertimos en json
        .then(res => res.json())
        .then( res=> {
            //cuando ya cambiamos la respuesta ajson modificamos los atributos
            this.setState({
                pokemon: res.results,
                url: res.next,
                loading: false
            })
        });
    };

    render(){
        if(this.state.loading){
            return(
                <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
                    <Text>A ver que sale</Text>
                </View>
            );  
        
    }

    return(
        <View style={{flex: 1, paddingTop:50, paddingLeft:5}}>
            
            <FlatList
                data={this.state.pokemon}
                renderItem={
                ({item}) => <Text>{ item.name }</Text>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    ); 

}
}

export default  OtrasP;