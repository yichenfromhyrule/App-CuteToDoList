import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
module.exports = {
    "headerContainer":{
        flexDirection: 'row',
        width: 1 * width,
        paddingTop: 0.03 * width,
        paddingBottom: 0.03 * width,
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width,
    },
    "headerDate" : {
        width: 0.7 * width,
    },
    "headerIcon" : {
        width: 0.1 * width,
        textAligin: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    "titleContainer" : {
        flexDirection: 'row',
        width: 1 * width,
        paddingTop: 0.01 * width,
        paddingBottom: 0.01 * width,
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width,
        backgroundColor: '#ACA0DE'
    },
    "titleName" : {
        width: 0.5 * width,
    },
    "titleTime" : {
        width: 0.22 * width,
        textAligin: "center",
        justifyContent: "center",
        alignItems: "center",
    },
}