/**
 * 무한 스크롤 시 news data 조합 로직
 * @param newsList
 * @param currentItems
 */
export const toCreateByNewsList = (newsList: Array<any>, currentItems: Array<any>): Array<any> => {

    let newItems = newsList.map((items: any) => {

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

    const resultItems = currentItems.length == 0 ? newItems : currentItems.concat(newItems)

    return resultItems
}
