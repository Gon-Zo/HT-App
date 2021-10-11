import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface IFilterLayoutWrapProps {
    readonly title : string,
    readonly flex? : number,
    readonly children : React.ReactNode
}

const FilterLayoutWrap = (props: IFilterLayoutWrapProps) => {

    const {children, title, flex} = props

    const [state, setState] = useState({
        flex: 1
    })

    useEffect(() => {

        const newState = {
            ...state,
            flex: typeof flex === "undefined" ? 1 : flex
        }

        setState(newState)
    }, [])

    return (
        <View style={{flex: state.flex}}>
            <Text style={{fontSize: 25, fontWeight: "bold", marginLeft: 10}}>
                {title}
            </Text>
            {children}
        </View>
    )
}


export default React.memo(FilterLayoutWrap)
