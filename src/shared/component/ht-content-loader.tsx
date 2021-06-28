import React from 'react'
// @ts-ignore
import ContentLoader, {Rect, Circle} from 'react-content-loader/native'

const HtContentLoader = (props: any) => {
    return (
        <ContentLoader
            speed={1}
            width={1400}
            height={350}
            viewBox="0 0 1400 350"
            backgroundColor="#dbd9d9"
            foregroundColor="#ecebeb"
            {...props}>
            <Rect x="4" y="11" rx="0" ry="0" width="1400" height="350"/>
        </ContentLoader>
    )
}

export default HtContentLoader
