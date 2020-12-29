import * as React from 'react';
import { Image, StyleSheet, Alert, Text, View, Button, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


function getStockData() {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState('');
    if(isLoading){
        fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=TSLA", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "6344837b96msh4dd4d2909be9cbbp1320a9jsn673352df54c6",
		        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	        }
        })
            .then(response => response.json())
            .then(data => {         
                setData(data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoading(false));;
    }
    const dataValues = Object.values(data);
    const dataVValues = JSON.stringify(dataValues[0]);
    if(dataValues[0]){
        const dVV = Object.entries(dataValues[0]);
        console.log(dVV);
    }
    
    return(
        <View>
            <Text>
                {dataVValues}
            </Text>
            
        </View>
    );
}


export default getStockData;