import { StyleSheet } from "react-native";
import { CARD_COLOR } from "../../shared/utils/color.utils";

export const styles = StyleSheet.create({
    modalWrap: {
        flex: 1,
    },
    modalBg: {
        flex: .5
    },
    modalBg_l : {
        flex : .15
    },
    modalContent: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    modalContentWrap: {
        flex: 1
    },
    areaPickerWrap: {
        padding: 10,
    },
    mainPickerWrap: {
        zIndex: 4000
    },
    subPickerWrap: {
        zIndex: 3000
    },
    pickerLabel: {
        fontSize: 14,
        paddingBottom: 10
    },
    tabViewWrap: {
        flexDirection: 'row',
        flex: .15
    },
    tabWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBox: {
        width: "80%",
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle: {
        fontSize: 17,
        marginBottom: 5,
        color: '#c9c9c9'
    },
    tabTitleOn: {
        color: CARD_COLOR[1],
        fontWeight: '800'
    },
    tabTitleLine: {
        width: '50%',
        height: 3,
        backgroundColor: CARD_COLOR[1]
    },
    tagBox: {
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 8
    },
    tagContentBox: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: "#c9c9c9",
        borderWidth: 1,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    tagContentBoxOn: {
        borderColor: CARD_COLOR[1],
        backgroundColor: CARD_COLOR[1]
    },
    btnWrap: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: "#fff",
        fontWeight: '800',
        marginLeft: 10
    },
    saveBtn: {
        backgroundColor: CARD_COLOR[1],
        width: '100%',
        height: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }


})
