import React, { useEffect, useState } from 'react'
import { GlobalSafeAreaView } from "../../shared/component/component";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getByNewsData } from "./new.reducer";
import { IRootState } from "../../shared/reducer";
import { FlatList, Linking, Text, TouchableOpacity, View } from "react-native";
import ScrollLayout from "../../shared/component/scroll-layout";
// import HTML from 'react-native-render-html'
// import { useWindowDimensions } from "react-native";

type NewsState = {
    newsList: Array<any>,
    page: number
}

const News = (props: any) => {

    const [state, setState] = useState<NewsState>({
        newsList: [],
        page: 1
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getByNewsData(state.page))
    }, [])

    const {newsData} = useSelector((state: IRootState) => {
        return {
            newsData: state.news.newsData
        }
    }, shallowEqual)

    useEffect(() => {

        // @ts-ignore
        const listOfNews = newsData.data['items']

        if (typeof listOfNews == "undefined") return

        let newItems = listOfNews.map((items: any) => {

            const reg = /&quot;/g

            const reg2 = /<[^>]+>/g

            const title = items.title.replace(reg, "\"\"").replace(reg2, '')

            const description = items.description.replace(reg, "\"\"").replace(reg2, '')

            return {
                ...items,
                title,
                description
            }
        })

        const currentItems = state.newsList

        const resultItems = currentItems.length == 0 ? newItems : currentItems.concat(newItems)

        const newState: NewsState = {
            ...state,
            newsList: resultItems
        }

        setState(newState)

    }, [newsData])

    const toRenderItem = (render: any) => {
        const {item, index} = render
        return (
            <TouchableOpacity
                key={index}
                style={{
                    margin: 10
                }} onPress={() => {
                Linking.openURL(item['originallink']).then(r => {
                    console.log(">>>>>>>>>>> open link")
                })
            }}>
                <Text>
                    {index}
                </Text>
                <Text>
                    {item['title']}
                </Text>
                <Text>
                    {item['description']}
                </Text>
            </TouchableOpacity>
        )
    }

    const toEndReached = () => {
        const page = state.page + 1
        dispatch(getByNewsData(page))
    }

    return (
        <GlobalSafeAreaView>
            {/*// @ts-ignore*/}
            <FlatList data={state.newsList} keyExtractor={(item, index) => index}
                      onEndReached={toEndReached}
                      onEndReachedThreshold={1}
                      refreshing={newsData.load}
                      renderItem={toRenderItem}/>
        </GlobalSafeAreaView>
    )
}

export default News
