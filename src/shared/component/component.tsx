import { Image, StyleSheet, Text, Platform, StatusBar, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IGlobalSafeAreaViewProps } from "./component.interface";
import { AppSafeAreaView , NoDataWrap } from "./component.style";

export const noData = () => {
    return (
        <NoDataWrap>
            <H3 text={'No Data'}/>
        </NoDataWrap>
    )
}

export const H1 = (props: any) => {
    const {text} = props
    return (
        <Text style={[
            {
                fontSize: 27,
                fontWeight: "bold",
            }]}>
            {text}
        </Text>
    )
}

export const H3 = (props: any) => {
    const {text} = props
    return (
        <Text style={[{
            fontSize: 17,
            fontWeight: '600'
        }]}>{text}</Text>
    )
}

export const LogoComponent = (props: any) => {
    return (
        <View style={styled.headerWrap}>
            <View style={styled.iconBox}>
                <Image style={styled.logoBox}
                       source={require('../../assets/images/bonbang1.png')}/>
            </View>
            <View style={styled.emptyBox}>
            </View>
        </View>
    )
}

export const GlobalSafeAreaView = (props: IGlobalSafeAreaViewProps) => {

    const {children} = props

    const [paddingTop, setPaddingTop] = useState<number>(0)

    useEffect(() => {
        if (Platform.OS === "android") {
            // @ts-ignore
            setPaddingTop(StatusBar['currentHeight'])
        }
    }, [])

    return (
        <AppSafeAreaView paddingTop={paddingTop}>
            {children}
        </AppSafeAreaView>
    )
}

const styled = StyleSheet.create({
    textShadow: {
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        textShadowColor: '#4d4d4d',
    },
    searchWrap: {
        height: 70,
        backgroundColor: "#fff",
    },
    searchBox: {
        flex: 1,
        margin: 10,
        backgroundColor: "rgba( 0 , 0, 0, 0.05)",
        borderRadius: 10,
        flexDirection: "row"
    },
    searchIconBox: {
        flex: .2,
        alignItems: "center",
        justifyContent: "center",
    },
    placeholderBox: {
        flex: 1,
        backgroundColor: "rgba( 0 , 0, 0, 0.03)",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    placeholderText: {
        fontSize: 15,
        marginLeft: 10
    },

    // logo - component - styled
    headerWrap: {
        height: 60,
        flexDirection: "row",
    },
    logoBox: {
        width: 120,
        height: 60,
        resizeMode: "contain"
    },
    iconBox: {
        flex: .7,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    emptyBox: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})
