import React from "react";
import { Alert, Modal, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export interface IExModalProps {
    visible: boolean,
    toClose: () => void
    children?: React.ReactNode
}

const ModalLayout = (props: IExModalProps) => {

    const {visible, toClose, children} = props

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                toClose()
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{
                        position : "absolute",
                        top : 15,
                        right : 15
                    }}>
                        <TouchableOpacity onPress={toClose}>
                            <FontAwesomeIcon size={18} icon={["fas", "times"]}/>
                        </TouchableOpacity>
                    </View>
                    {
                        children
                    }
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        margin: 20,
        height: 450,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});

export default ModalLayout
