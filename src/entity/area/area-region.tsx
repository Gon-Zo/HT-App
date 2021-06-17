import React, {memo, useEffect} from 'react';
import {IAreaRegionProps} from './area.interface';
import AreaTab from "../../shared/component/area-tab";
import {BackButton} from "../../shared/component/component";
import {Image, StyleSheet, Text, View} from "react-native";
import ScrollLayout from "../../shared/component/scroll-layout";

const TAB_DATA = [
    {'text': '아파트', active: false},
    {'text': '연립다세대', active: false},
    {'text': '단독주택', active: false},
];

const AreaRegion = (props: IAreaRegionProps) => {

    const {navigation, route} = props

    const {key} = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: key,
            headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
        })
    }, [])

    return (
        <React.Fragment>
            <AreaTab data={TAB_DATA}/>

            <ScrollLayout stickyList={[]}>

                {/*<View style={styled.cardWrap}>*/}
                {/*    <View style={[styled.cardRow, styled.cardTitleWrap]}>*/}
                {/*        <Text style={styled.cardTitle}>디에이치자이개포</Text>*/}
                {/*    </View>*/}
                {/*    <View style={[styled.cardRow, {backgroundColor: "#f0f"}]}>*/}

                {/*    </View>*/}
                {/*    <View style={[styled.cardRow, styled.cardTitleWrap]}>*/}
                {/*        <Text style={styled.cardPrice}>100,100,100 원</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}

            </ScrollLayout>


        </React.Fragment>
    )
}

const styled = StyleSheet.create({

    cardWrap: {
        flex: 1,
        height: 130,
        backgroundColor: "#f00",
        margin: 15,
        marginRight: 25,
        marginLeft: 25,
        borderRadius: 20,
        flexDirection: "column",
        overflow: "hidden"
    },

    cardRow: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },

    cardTitleWrap: {
        // backgroundColor: "#00f",
        paddingLeft : 20,
    },

    cardTitle : {
        color : "#fff",
        fontSize : 20
    },

    cardPrice : {
        color : "#fff",
        fontSize : 20
    },

    imageView: {}
})

export default memo(AreaRegion)
