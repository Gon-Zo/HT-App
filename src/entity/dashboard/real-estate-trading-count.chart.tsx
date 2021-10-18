import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H3 } from "../../shared/component/component";
import {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
} from "victory-native";
import Svg from "react-native-svg";
import { CARD_COLOR } from "../../shared/utils/color.utils";
import ButtonGroup from "../../shared/component/button-group";
import { useDispatch } from "react-redux";
import { getByRealEstateTradingCount, setByTrendingNum } from "./dashboard.reducer";
import { ButtonGroupList } from "../../shared/utils/data.utils";

interface IRealEstateTradingCountChartProps {
    data: any | Array<any> | undefined
}

type RealEstateTradingCountState = {
    readonly xLabel: Array<String> | Array<any>
    readonly chartData: Array<any>
}


const RealEstateTradingCountChart = (props: IRealEstateTradingCountChartProps) => {

    const {data} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<RealEstateTradingCountState>({
        xLabel: [],
        chartData: []
    })

    const [trendingNum, setTrendingNum] = useState<number | any>(0)

    useEffect(() => {

        const currentChartData = data.data

        if (typeof currentChartData === "undefined") return;

        const values = currentChartData.map((value: any) => {
            return {
                x: value['date'],
                y: value['count']
            }
        })

        const chartDataSize = values.length

        const isLongChartData = chartDataSize > 6

        // const chartData = isLongChartData ? values.slice(0, 6) : values

        const chartData = values

        const newState: RealEstateTradingCountState = {
            xLabel: [],
            chartData
        }

        setState(newState)

    }, [data])

    const toPressButtonGroup = (num: number) => {
        setTrendingNum(num)
        dispatch(setByTrendingNum(ButtonGroupList[num].value))
        dispatch(getByRealEstateTradingCount())
    }

    return (
        <View style={{marginTop: 10, padding: 5}}>
            <H3 text={'부동산 거래 건수 추이'} styles={{
                paddingLeft: 8
            }}/>
            <ButtonGroup data={ButtonGroupList}
                         pos={'flex-end'}
                         selectValue={trendingNum}
                         toPress={toPressButtonGroup}/>
            <Svg>
                <VictoryChart
                    theme={VictoryTheme.material}
                    padding={{top: 10, left: 50, right: 50, bottom: 30}}
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}>
                    <VictoryLine
                        style={{
                            data: {stroke: CARD_COLOR[0]},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={state.chartData}/>
                </VictoryChart>
            </Svg>
        </View>
    )
}

export default React.memo(RealEstateTradingCountChart)
