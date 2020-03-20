import {Alert} from 'react-native'
const URL_DATA = 'http://172.18.83.193/iot/data';
class API {
    async validarLog(correo,pass){
        const query = await fetch(`${URL_DATA}login.php?correo=${correo}&pass=${pass}`);
        const data = await query.json();
        return data;
    }

    registerData(correo,user,pass){
        fetch(`${URL_DATA}registrar.php`,{
            method: 'POST',
            body: JSON.stringify({
                pCorreo: correo,
                pUser: user,
                pPass: pass

            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }

        }).then(response => response.text())
        .catch(error => console.error('Error',error))
        .then(response =>{
            if(response.status == 1){
                Alert.alert('registro bueno');
            }
            else {
                Alert.alert('Ocurrio algo mal');
            }
            
        });
    }
}

export default new API()