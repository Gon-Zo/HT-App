import React, {useEffect, useState} from 'react'
import {VictoryChart, VictoryContainer, VictoryPie, VictoryTheme} from "victory-native";

const PieChart = (props: any) => {

    const [pieData, setPieData] = useState([])

    const {data} = props

    useEffect(() => {

        if(typeof data == "undefined") return;

        const arrayOfData = data.map((payload: any) => {
            return {
                x: payload.regionName,
                y: payload.count
            }
        })

        setPieData(arrayOfData)

    }, [])

    return (
        <VictoryPie
            containerComponent={<VictoryContainer responsive={false}/>}
            data={pieData}
            animate={{
                duration: 2000
            }}
        />
    )
}

export default PieChart
