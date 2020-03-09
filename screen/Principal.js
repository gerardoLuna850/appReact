import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Principal extends Component{
    //para hacer el activity indicator
    constructor(props){
        super(props)
        this.state = {isLoading: true}
    }


    //tipo de constructor que carga antes de que la app se cargue
    //se le puso async y el foquito para que le pusiera el try-catch
    //await es la promeds de ls busqueda
    //la respuesta se pone en formato json en la variable response.json
    
     async componentDidMount(){
        try {
            //en datasource solo se coloca donde sale la API 
            const Response = await fetch('https://reactnative.dev/movies.json');
            const responseJson = await Response.json();
            this.setState({
                isLoading: false,
                // en datasource se guarda movies en formato json
                dataSource: responseJson.movies,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }

}//end del component DivMount

render(){
    //preguntar el estado de la variable is loading
    if(this.isLoading==true){
        return(
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator />
            </View>
        );
    }
    //aqui es el Else
    return(
        <View>
            <FlatList 
            data={this.state.dataSource}
            renderItem = {({item}) => 
            //lo va sacando des json por el id
            <Text> {item.title}, {item.releaseYear} </Text> }
                keyExtractor={({id},index) => id} />
        </View>
    );

}

} //fin de la clase
export default Principal;


