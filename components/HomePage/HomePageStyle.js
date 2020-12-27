import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
export default {
    "page": {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
    "titleBlock": {
        flexDirection: "column",
        textAligin: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    "titleText": {
        marginTop: 0.05 * height,
        marginBottom: 0.05 * height,
        fontSize: 15,
        color: "black",
    },
    
    
}