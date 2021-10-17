import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { H3 } from "../../shared/component/component";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryZoomContainer } from "victory-native";
import Svg from "react-native-svg";
import { CARD_COLOR } from "../../shared/utils/color.utils";

interface IRealEstateTradingCountChartProps {
    data: any | Array<any> | undefined
}

type RealEstateTradingCountState = {
    readonly xLabel: Array<String> | Array<any>
    readonly chartData: Array<any>
}

const RealEstateTradingCountChart = (props: IRealEstateTradingCountChartProps) => {

    const {data} = props

    const [state, setState] = useState<RealEstateTradingCountState>({
        xLabel: [],
        chartData: []
    })

    useEffect(() => {

        const chartData = data.data

        if (typeof chartData === "undefined") return;

        const xLabel = chartData.map((value: any) => value['date'])

        const values = chartData.map((value: any) => {
            return {
                x: value['date'],
                y: value['count']
            }
        })

        console.log(">>>>>>>>>>>>", values)

        const newState: RealEstateTradingCountState = {
            xLabel: xLabel,
            chartData: values
        }

        setState(newState)

    }, [data])

    return (
        <View style={{marginTop: 10, padding: 5}}>
            <H3 text={'부동산 거래 건수 추이'} styles={{
                paddingLeft: 8
            }}/>
            <View>
                <Svg>
                    <VictoryChart
                        // standalone={false}
                        theme={VictoryTheme.material}
                        animate={{
                            duration: 2000,
                            onLoad: {duration: 1000}
                        }}
                    >
                        <VictoryLine
                            style={{
                                data: {stroke: CARD_COLOR[0]},
                                parent: {border: "1px solid #ccc"}
                            }}
                            //@ts-ignore
                            // categories={{x: state.xLabel, y: ["1", "2", "3", "4", "5"]}}
                            data={state.chartData}
                        />
                    </VictoryChart>
                </Svg>
            </View>
        </View>
    )
}

export default React.memo(RealEstateTradingCountChart)
