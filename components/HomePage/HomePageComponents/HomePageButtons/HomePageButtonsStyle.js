import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export default {
    "homePageButton": {
        flexDirection: "column",
        height: 60,
        width: 0.95 * width,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        margin: 0.005 * height,
        // eslint-disable-next-line no-dupe-keys
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: 'flex-begin'
    },
    "homePageButtonText": {
        color: "black",
    }
    
}