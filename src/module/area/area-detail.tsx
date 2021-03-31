import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '../../shared/reducer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IAreaProps} from './area.interface';
import {AreaDetailButton, BackButton} from '../component/ht-button';

const AreaDetail = (props: IAreaProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitle: '지역별',
                headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
                headerRight: (() => <AreaDetailButton navigation={navigation}/>),
            });
    }, []);

    const {detailTitle} = useSelector((state: IRootState) => {
        return {
            detailTitle: state.area.detailTitle,
        };
    });

    const {load, error, data} = detailTitle;

    return (
        <ScrollerLayout>

            <View style={{
                flexDirection: 'row',
                flex: 1,
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                        padding: 10,
                        marginRight: 5,
                        borderColor: '#cac8c8',
                        borderWidth: 1.5,
                        borderRadius: 5,
                    }}
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Area')}>
                    <Icon name="map-marker" size={20}/>
                    <Text style={{paddingLeft: 5 , fontWeight : "bold" , fontSize : 15}}>
                        {data}
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    padding: 10,
                    marginLeft: 5,
                    borderColor: '#cac8c8',
                    borderWidth: 1.5,
                    borderRadius: 5,
                }}>
                    <Icon name="calendar-o" size={24}/>
                    <Text style={{paddingLeft: 5}}>03.30 ~ 03.21</Text>
                </View>
            </View>


        </ScrollerLayout>
    );

};

export default AreaDetail;
