import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
module.exports = {
    "stockContainer":{
        flexDirection: 'row',
        width: 1 * width,
        paddingTop: 0.03 * width,
        paddingBottom: 0.03 * width,
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width,
        borderBottomColor: '#ACA0DE',
        borderBottomWidth: 1,
    },
    "stockNameContainer" : {
        width: 0.5 * width,
        textAligin: "center",
        justifyContent: "center",
    },
    "stockTimeContainer" : {
        width: 0.22 * width,
        textAligin: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
}