import React, { useState } from "react";
import ExModal, { IExModalProps } from "./ex-modal";
import { Calendar } from "react-native-calendars";
import { getDatesStartToLast, toDistanceByDate } from "../utils/layout.utils";
import { Pressable, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

interface IDateModalProps extends IExModalProps {
    setDate : (payload : DateModalState) => void
}

export type DateModalState = {
    startDate: any,
    endDate: any,
    markedDates: any
}

const DateModal = (props: IDateModalProps) => {

    const {visible, toClose , setDate} = props

    const [state, setState] = useState<DateModalState>({
        startDate: '',
        endDate: '',
        markedDates: {}
    })

    const toReset = () =>{

        const newState = {
            startDate: '',
            endDate: '',
            markedDates: {}
        }

        setState(newState)
    }

    const onClose = () => {
        toReset()
        toClose()
    }

    const toSave = () =>{
        setDate(state)
        toClose()
    }

    return (
        <ExModal visible={visible} toClose={onClose}>
            <Calendar
                markingType={'period'}
                markedDates={state.markedDates}
                onDayPress={(payload: any) => {

                    const dateString = payload['dateString']

                    const isStart = state.startDate === '' && state.endDate === ''

                    const isAdd = state.startDate !== '' && state.endDate !== ''

                    let markedDates: any = {}

                    let newState: any = {}

                    if (isStart && !isAdd) {

                        const anyOfStartDate = {startingDay: true, color: '#50cebb'};

                        markedDates[dateString] = anyOfStartDate

                        newState = {
                            ...state,
                            markedDates: markedDates,
                            startDate: dateString
                        }

                    } else if (!isStart && isAdd) {

                        const startDate = state.startDate

                        const endDate = state.endDate

                        const startNum = toDistanceByDate(startDate, dateString)

                        const endNum = toDistanceByDate(dateString, endDate)

                        if (startNum <= endNum) {

                            markedDates[dateString] = {startingDay: true, color: '#50cebb'}

                            const result = getDatesStartToLast(dateString, endDate)

                            markedDates[endDate] = state.markedDates[endDate]

                            for (let i = 1; i < result.length - 1; i++) {
                                markedDates[result[i]] = {color: '#50cebb'}
                            }

                            newState = {
                                ...state,
                                startDate: dateString,
                                markedDates: markedDates
                            }

                        } else {

                            markedDates[dateString] = {endingDay: true, color: '#50cebb'}

                            const result = getDatesStartToLast(startDate, dateString)

                            markedDates[startDate] = state.markedDates[startDate]

                            for (let i = 1; i < result.length - 1; i++) {
                                markedDates[result[i]] = {color: '#50cebb'}
                            }

                            newState = {
                                ...state,
                                endDate: dateString,
                                markedDates: markedDates
                            }

                        }

                    } else {
                        markedDates = {...state.markedDates}

                        const anyOfEndDate = {endingDay: true, color: '#50cebb'}

                        markedDates[dateString] = anyOfEndDate

                        const result = getDatesStartToLast(state.startDate, dateString)

                        for (let i = 1; i < result.length - 1; i++) {
                            markedDates[result[i]] = {color: '#50cebb'}
                        }

                        newState = {
                            ...state,
                            markedDates: markedDates,
                            endDate: dateString
                        }
                    }

                    setState(newState)
                }}
            />
            <View style={{
                flexDirection : 'row',
                justifyContent : "flex-end"
            }}>
                <Pressable
                    style={{
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: "#c9c9c9",
                        marginRight : 10
                    }}
                    onPress={toReset}>
                    <FontAwesomeIcon color={'#fff'} icon={['fas', 'trash']}/>
                </Pressable>
                <Pressable
                    style={{
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: '#fa8072',
                    }}
                    onPress={toSave}>
                    <FontAwesomeIcon color={'#fff'} icon={['fas', 'save']}/>
                </Pressable>
            </View>
        </ExModal>
    )
}


export default DateModal
