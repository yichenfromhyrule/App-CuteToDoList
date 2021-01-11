import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
export default {
    "page": {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
    "image": {
        flex: 1,
        resizeMode: "cover",
        flexDirection: "column",
    },
    "titleBlock": {
        flexDirection: "column",
        textAligin: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    
}