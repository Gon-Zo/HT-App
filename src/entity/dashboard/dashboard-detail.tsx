import React, { useEffect, useState } from "react";
import { IDashboardDetailProps } from "./dashboard.interface";
import { BackButton } from "../../shared/component/component";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DashboardDetail = (props: IDashboardDetailProps) => {

    const {navigation, route} = props

    const {key, index, code} = route.params

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    useEffect(() => {

        navigation.setOptions({
            headerTitle: key,
            headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
        })

    }, [])

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <React.Fragment>

            <View>
                <Button title="Show Date Picker" onPress={showDatePicker}/>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

        </React.Fragment>
    )
}

export default DashboardDetail
