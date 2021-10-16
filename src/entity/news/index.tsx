import React, { useEffect, useState } from 'react'
import { GlobalSafeAreaView } from "../../shared/component/component";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getByNewsData } from "./new.reducer";
import { IRootState } from "../../shared/reducer";
import { FlatList, Linking, Text, TouchableOpacity } from "react-native";
import { toCreateByNewsList } from "./news.service";
import { INewsProps, NewsState } from "./news.interface";

const News = (props: INewsProps) => {

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
        const currentNewsList = newsData.data['items']

        if (typeof currentNewsList == "undefined") return

        const newsList = toCreateByNewsList(currentNewsList, state.newsList)

        const newState: NewsState = {
            ...state,
            newsList
        }

        setState(newState)

    }, [newsData])

    const toOpenWindow = (link: string) => {
        Linking.openURL(link).then(r => console.log(">>>>>>>> sucess", r))
    }

    const toRenderItem = (render: any) => {
        const {item, index} = render
        return (
            <TouchableOpacity
                key={index}
                style={{
                    margin: 10
                }}
                onPress={() => toOpenWindow(item['originallink'])}>
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

    const toKeyExtractor = (item: any, index: number) => index

    return (
        <GlobalSafeAreaView>
            <FlatList
                // @ts-ignore
                keyExtractor={toKeyExtractor}
                data={state.newsList}
                onEndReached={toEndReached}
                onEndReachedThreshold={1}
                scrollEventThrottle={16}
                refreshing={newsData.load}
                renderItem={toRenderItem}/>
        </GlobalSafeAreaView>
    )

}

export default News
