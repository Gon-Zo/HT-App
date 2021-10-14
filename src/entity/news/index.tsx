import React, { useEffect, useState } from 'react'
import { GlobalSafeAreaView } from "../../shared/component/component";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getByNewsData } from "./new.reducer";
import { IRootState } from "../../shared/reducer";
// import HTML from 'react-native-render-html'
// import { useWindowDimensions } from "react-native";

type NewsState = {
    newsList: Array<any>
}

const News = (props: any) => {

    const [state, setState] = useState<NewsState>({
        newsList: []
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getByNewsData())
    }, [])

    const {newsData} = useSelector((state: IRootState) => {
        return {
            newsData: state.news.newsData
        }
    }, shallowEqual)

    useEffect(() => {

        if (typeof newsData.data === "undefined") return;

        // @ts-ignore
        const items = newsData.data['items']

        const newState: NewsState = {
            ...state,
            newsList: items
        }

        setState(newState)

    }, [newsData])

    // const htmlStr = "20개월간 <b>부동산</b>실거래 취소 19만건 육박…&quot;투기수요 '집값조작' 악용&quot;"

    return (
        <GlobalSafeAreaView>
            {
                state.newsList.map((news: any, num: number) =>
                    (
                        // <HTML key={num} source={{html: news['title']}} contentWidth={useWindowDimensions().width}/>
                    ))
            }
        </GlobalSafeAreaView>
    )
}

export default News
