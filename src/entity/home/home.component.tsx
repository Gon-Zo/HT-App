import React, {useEffect, useState} from 'react'
import BarChart from "../../shared/chart/bar-chart";
import {ChartLayout} from "../../shared/component/layout";
import HtContentLoader from "../../shared/component/ht-content-loader";
import {BarChartState} from "../../shared/chart/chart.interface";

export const HomeBarChart = (props: any) => {

    const [state, setState] = useState<BarChartState>({tickFormat: [], tickValue: [], data: []})

    const {load, data} = props

    useEffect(() => {

        if (typeof data == "undefined") return;

        const tickFormat = data.map((payload: any) => payload['regionName'])

        const tickValue = data.map((payload: any, index: number) => index + 1)

        const newState: BarChartState = {
            tickValue,
            tickFormat,
            data
        }

        setState(newState)

    }, [data])

    const onPress = () => {
    }

    const toTickFormat = (x: any) => (`${x / 1000}천건`)

    if (load) return <HtContentLoader/>

    return (
        <ChartLayout title={"부동산 거래 건수 조회"} onPress={onPress}>
            <BarChart barData={state}
                      tickFormat={toTickFormat}
                      zoomDomain={{x: [1, 5]}}
                      x={"regionName"}
                      y={"count"}
            />
        </ChartLayout>
    )

}
