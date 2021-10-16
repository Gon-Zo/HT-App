import React, { memo, useEffect } from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import { HomeProps } from "./home.interface";
import { LogoComponent } from "../../shared/component/component";
import { View } from "react-native";
import {
    VictoryAxis,
    VictoryChart,
    VictoryHistogram,
    VictoryLine,
    VictoryPie,
    VictoryScatter,
    VictoryTheme
} from "victory-native";

const Home = (props: HomeProps) => {

    const {navigation} = props

    useEffect(() => {
    }, [])

    return (
        <ScrollLayout stickyList={[]}>
            <LogoComponent/>
            <View>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{x: 20}}
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}
                >
                    <VictoryHistogram data={[
                        {x: 1},
                        {x: 2},
                        {x: 2},
                        {x: 4},
                        {x: 4},
                        {x: 5}
                    ]}
                    />
                </VictoryChart>
            </View>

            <View>
                <VictoryChart
                    theme={VictoryTheme.material}
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}>
                    <VictoryLine
                        style={{
                            data: {stroke: "orange"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={[
                            {x: 1, y: 2},
                            {x: 2, y: 3},
                            {x: 3, y: 5},
                            {x: 4, y: 4},
                            {x: 5, y: 7}
                        ]}
                    />
                </VictoryChart>
            </View>

            <View>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{x: 20}}
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}>
                    <VictoryHistogram horizontal
                                      data={[
                                          {x: 1},
                                          {x: 2},
                                          {x: 2},
                                          {x: 4},
                                          {x: 4},
                                          {x: 5}
                                      ]}
                    />
                </VictoryChart>
            </View>

            <View>
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    cornerRadius={({datum}) => datum.y * 5}
                    theme={VictoryTheme.material}
                    padding={100}
                    data={[
                        {x: 1, y: 2, label: "서울"},
                        {x: 2, y: 3, label: "부산"},
                        {x: 3, y: 5, label: "대구"},
                        {x: 3, y: 5, label: "대구"},
                        {x: 3, y: 5, label: "대구"},
                        {x: 3, y: 5, label: "대구"}
                    ]}
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}
                />
            </View>

            <View>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryAxis/>
                    <VictoryAxis dependentAxis/>
                    <VictoryLine
                        style={{data: {stroke: "orange"}}}
                        y={(data) => Math.sin(2 * Math.PI * data.x)}
                    />
                    <VictoryScatter
                        y={(data) => Math.sin(2 * Math.PI * data.x)}
                        samples={25}
                        size={5}
                        style={{data: {fill: "tomato"}}}
                    />
                </VictoryChart>
            </View>
        </ScrollLayout>
    )

}

export default memo(Home);
