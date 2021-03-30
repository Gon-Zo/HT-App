import React, {useEffect} from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {IAreaProps} from './area.interface';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AreaList from './area-list';

const Area = (props: IAreaProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate('Search');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '지역',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: ((props: any) =>
                    <TouchableOpacity activeOpacity={1}
                                      style={{right: 10}}
                                      onPress={goToSearchView}>
                        <FontAwesome5Icon name={'search'} size={20}/>
                    </TouchableOpacity>
            ),
        });
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <AreaList/>
        </SafeAreaView>
    );
};


export default Area;
