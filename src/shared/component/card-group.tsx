import React from 'react'
import { StyleSheet, View } from "react-native";
import { Tooltip, Text } from 'react-native-elements';

interface ICardGroupProps {
}

const CardGroup = (props: ICardGroupProps) => {

    return (
        <View style={{marginTop: 10}}>

            <View style={{
                paddingLeft: 10
            }}>
                <Text style={
                    {
                        fontSize: 17,
                        fontWeight: '600'
                    }
                }>아파트 전월세</Text>
            </View>

            <View style={{flexDirection: "row", height: 150,}}>
                <View style={[{backgroundColor: "tomato",}, styles.cardWrap]}>
                    <Text style={[styles.cardText]}>월세: 300</Text>
                    <Text style={[styles.cardText]}>보증금: 60,000</Text>
                </View>

                <View style={[{backgroundColor: "orange"}, styles.cardWrap]}>
                    <Text style={[styles.cardText]}>광화문풍림스페이스본(101동~105동)</Text>
                    <Text style={[styles.cardText]}>월세: 300</Text>
                    <Text style={[styles.cardText]}>보증금: 60,000</Text>
                </View>

                <View style={[{backgroundColor: "gold",}, styles.cardWrap]}>
                    <Text style={[styles.cardText]}>광화문풍림스페이스본(101동~105동)</Text>
                    <Text style={[styles.cardText]}>월세: 300</Text>
                    <Text style={[styles.cardText]}>보증금: 60,000</Text>
                </View>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    cardWrap: {
        flex: 1,
        margin: 5,
        borderRadius: 8
    },
    cardText: {
        color: '#fff'
    }
})


export default React.memo(CardGroup)
