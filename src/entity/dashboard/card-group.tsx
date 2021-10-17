import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Platform } from "react-native";
import { CARD_COLOR } from "../../shared/utils/color.utils";
import { BaseCardData, CardGroupState, ICardGroupProps } from "./dashboard.interface";
import { H3, noData } from "../../shared/component/component";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const CardGroup = (props: ICardGroupProps) => {

    const {data} = props

    const [state, setState] = useState<CardGroupState>({
        cardData: [],
        topData: [],
    })

    useEffect(() => {

        const fetchData = data.data

        if (typeof fetchData === 'undefined' || fetchData.length == 0) return

        const cardData = fetchData
            .sort((o1: any, o2: any) => {
                return o2['monthlyRent'] - o1['monthlyRent']
            })
            .map((data: any) => {
                return {
                    title: data.apartmentName,
                    count1: data.monthlyRent,
                    count2: data.deposit,
                } as BaseCardData
            })

        const topData = cardData.slice(0, 3)

        const newState: CardGroupState = {
            cardData: cardData,
            topData: topData,
        }

        setState(newState)

    }, [data])

    const baseCard = state.topData.map((data: any, index: number) => (
        <View key={index}
              style={[{backgroundColor: CARD_COLOR[index], padding: 5},
                  styles.cardWrap,
                  styles.shadow]}>
            <View style={{
                flex: 1,
                paddingTop: 5,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: 'flex-start'
            }}>
                <Text style={[styles.cardText, styles.cardColor]}>{data.title}</Text>
            </View>

            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end"
            }}>
                <Text style={[styles.cardColor]}>월세</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}>
                    <Text style={[styles.cardColor, styles.cardText, styles.cardSize]}>{data.count1 / 100}</Text>
                    <Text style={[styles.cardColor]}> 백만원</Text>
                </View>
            </View>

        </View>
    ))

    const loader = () => {
        return (
            <SkeletonPlaceholder speed={50000}
                                 direction={'left'}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <SkeletonPlaceholder.Item width={100} height={130} borderRadius={10} margin={10}/>
                    <SkeletonPlaceholder.Item width={100} height={130} borderRadius={10} margin={10}/>
                    <SkeletonPlaceholder.Item width={100} height={130} borderRadius={10} margin={10}/>
                </View>
            </SkeletonPlaceholder>
        )
    }

    return (
        <View style={{marginTop: 10, padding: 5}}>
            <View style={{
                paddingLeft: 8
            }}>
                <H3 text={'아파트 월세'}/>
            </View>
            <View style={{flexDirection: "row", flex: 1, height: 150}}>
                {data.load ? loader() : (state.cardData.length == 0 ? noData() : baseCard)}
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
    cardColor: {
        color: '#fff'
    },
    cardText: {
        fontWeight: 'bold'
    },
    cardSize: {
        fontSize: 20
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#4d4d4d',
                shadowOffset: {width: 0, height: 5,},
                shadowOpacity: 0.5,
                shadowRadius: 5,
            }, android: {elevation: 8,},
        }),
    },
})


export default React.memo(CardGroup)
