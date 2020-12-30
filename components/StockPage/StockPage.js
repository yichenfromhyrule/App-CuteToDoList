import * as React from 'react';
import { Image, StyleSheet, Alert, Text, View, Button, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


function OnePieceStockInfo() {
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
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoading(false));;
    }
    const onePieceStockValues = Object.values(data);
    let onePieceStock_name = "";
    let onePieceStock_close = "";
    if(onePieceStockValues[0]){
        const onePieceStockArray = Object.entries(onePieceStockValues[0]); 
        onePieceStock_name = onePieceStockArray[0][1];
        onePieceStock_close = onePieceStockArray[7][1];
    }
    
    return(
        <View>
            <View style={styles.oneStockBox}>
                <View style={styles.oneStockContainer}>
                    <View style={styles.stockNameContainer}>
                        <Text>{onePieceStock_name}</Text>
                    </View>
                    <View style={styles.stockNameContainer}>
                        <Text>{onePieceStock_close}</Text>
                    </View>     
                </View>
            </View>
        </View>
    );
}

export default OnePieceStockInfo;

const styles = StyleSheet.create({
    oneStockBox: {
        marginTop: 70,
        height: 50,
        alignItems:"center",
    },
    oneStockContainer: {
        width: 300,
        alignItems:"center",
        backgroundColor: "white",
        flexDirection: 'row',
        borderRadius: 10,
    },
    stockNameContainer: {
        height: 50,
        width:150,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    }
});