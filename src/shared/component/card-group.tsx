import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from "react-native";
import { CARD_COLOR } from "../utils/color.utils";

export type BaseCardData = {
    title: string
    count1: number
    count2: number
}

type BaseCardState = {
    color: string
    data: BaseCardData
}

interface IBaseCardWrapProps {
    num: number
    data: BaseCardData
}

interface ICardGroupProps {
    cardData: Array<BaseCardData>
}

const CardGroup = (props: ICardGroupProps) => {

    const {cardData} = props

    return (
        <View style={{marginTop: 10}}>

            <View style={{
                paddingLeft: 8
            }}>
                <Text style={
                    {
                        fontSize: 17,
                        fontWeight: '600'
                    }
                }>아파트 전월세</Text>
            </View>

            <View style={{flexDirection: "row", height: 150,}}>
                {
                    cardData.map((data: any, num: number) =>
                        (
                            <BaseCardWrap
                                key={num}
                                num={num}
                                data={data}/>
                        )
                    )
                }
            </View>
        </View>
    )
}

const BaseCardWrap = (props: IBaseCardWrapProps) => {

    const {data, num} = props

    const [state, setState] = useState<BaseCardState>({
        data: {
            title: '',
            count1: 0,
            count2: 0
        },
        color: ''
    })

    useEffect(() => {

        const color = CARD_COLOR[num]

        const newData = {
            ...data,
            count1: data.count1 / 1000,
            count2: data.count2 / 1000
        }

        const newState: BaseCardState = {
            data: newData,
            color: color
        }

        setState(newState)

    }, [])

    return (
        <View style={[{backgroundColor: state.color, padding: 5}, styles.cardWrap]}>
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: 'center'
            }}>
                <Text style={[styles.cardText]}>
                    {state.data.title}
                </Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center"
            }}>
                <Text style={[styles.cardText]}>월세: {state.data.count1} K</Text>
                <Text style={[styles.cardText]}>보증금: {state.data.count2} K</Text>
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
