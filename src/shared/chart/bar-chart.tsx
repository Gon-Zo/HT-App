import React, {memo, useEffect, useState} from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLabel,
} from "victory-native";
import {BarChartProps, BarChartState} from "./chart.interface";

const BarChart = (props: BarChartProps) => {

    const {barData} = props

    const [state, setState] = useState<BarChartState>({
        tickFormat: [],
        tickValue: []
    })

    useEffect(() => {

        if (typeof barData == "undefined") return;

        const tickFormat = barData.map(payload => payload['regionName'])

        const tickValue = barData.map((payload: any, index: number) => index + 1)

        const newState: BarChartState = {
            tickValue,
            tickFormat
        }

        setState(newState)

    }, [barData])

    if (Object.keys(state).length == 0) return null

    if (typeof barData == "undefined") return null

    return (
        <VictoryChart
            containerComponent={
                <VictoryZoomContainer
                    zoomDomain={
                        {x: [1, 5]}
                    }
                />
            }
            theme={VictoryTheme.material}
            domainPadding={20}
        >
            <VictoryAxis tickValues={state.tickValue}
                         tickFormat={state.tickFormat}/>
            <VictoryAxis
                dependentAxis={true}
                tickFormat={(x) => (`${x / 1000}천건`)}/>
            <VictoryBar
                labels={({datum}) => datum.y}
                style={{labels: {fill: "red"}}}
                labelComponent={<VictoryLabel dy={30}/>}
                barRatio={3}
                alignment="start"
                data={barData}
                x="regionName"
                y="count"
            />
        </VictoryChart>
    )
}

export default memo(BarChart)
