import React, {useEffect} from "react";
import {IDashboardDetailProps} from "./dashboard.interface";
import {BackButton} from "../../shared/component/component";

const DashboardDetail = (props: IDashboardDetailProps) => {

    const {navigation, route} = props

    const {key} = route.params

    useEffect(() => {

        navigation.setOptions({
            headerTitle: key,
            headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
        })

    }, [])

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default DashboardDetail
