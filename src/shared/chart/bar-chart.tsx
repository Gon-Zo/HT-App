import React, {memo, useEffect, useState} from 'react'
import {Bar, VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip, VictoryAxis,} from "victory-native";
import {BarChartProps, BarChartState} from "./chart.interface";

const data = [
    {quarter: 1, earnings: 13000, label: "Quarter 1"},
    {quarter: 2, earnings: 16500, label: "Quarter 2"},
    {quarter: 3, earnings: 14250, label: "Quarter 3"},
    {quarter: 4, earnings: 19000, label: "Quarter 4"},
];

const BarChart = (props: BarChartProps) => {

    const [state, setState] = useState<BarChartState>({
        tickFormat: [],
        tickValue: []
    })

    useEffect(() => {

        const tickFormat = data.map(payload => payload.label)

        const tickValue = data.map(payload => payload.quarter)

        const newState: BarChartState = {
            tickValue,
            tickFormat
        }

        setState(newState)

    }, [])

    if (Object.keys(state).length == 0) return null

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}>
            <VictoryAxis tickValues={state.tickValue}
                         tickFormat={state.tickFormat}/>
            <VictoryAxis
                dependentAxis={true}
                tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryBar
                animate={{
                    duration: 2000,
                    onLoad: {duration: 1000}
                }}
                labelComponent={<VictoryTooltip
                    renderInPortal={false}/>}
                data={data}
                x="quarter"
                y="earnings"
            />
        </VictoryChart>
    )
}

export default memo(BarChart)
