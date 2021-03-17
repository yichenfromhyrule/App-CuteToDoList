import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
module.exports = {
    "cityWeatherContainer": {
        flexDirection: 'row',
        width: 0.9 * width,
        height: 0.12 * height,
        backgroundColor: 'red',
    },
    "cityContainer" : {
        flexDirection: 'row',
        width: 1 * width,
        height: 0.12 * height,
        paddingTop: 0.01 * width,
        paddingBottom: 0.01 * width,
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width,
        textAligin: "center",
        justifyContent: "center",
        alignItems: "center",
    },
}