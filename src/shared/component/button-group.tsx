import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CARD_COLOR } from "../utils/color.utils";

type ButtonGroupData = {
    label: string,
    value: number
}

interface IButtonGroupProps {
    readonly data: Array<ButtonGroupData>
    readonly selectValue: any | number
    readonly toPress: (num: number) => void
    readonly pos: 'center' | 'flex-start' | 'flex-end'
}

const ButtonGroup = (props: IButtonGroupProps) => {

    const {data, selectValue, toPress, pos} = props

    const toRenderItem = (text: string, num: number) => {

        const isSelectAble = num == selectValue

        const toPressCallBack = () => toPress(num)

        return (
            <TouchableOpacity
                key={num}
                style={[{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: "center",
                    backgroundColor: '#e5e5e5',
                    borderRadius: 10,
                    marginLeft: 1.5,
                    marginRight: 1.5,
                }, isSelectAble && {
                    backgroundColor: CARD_COLOR[0]
                }]}
                onPress={toPressCallBack}>
                <Text style={[{color: "#000"}, isSelectAble && {color: "#fff"}]}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: pos,
        }}>
            {
                data.map(({label, value}, index) => toRenderItem(label, index))
            }
        </View>
    )
}

export default ButtonGroup
