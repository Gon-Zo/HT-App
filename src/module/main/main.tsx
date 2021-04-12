import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {IMainProps} from './main.interface';
import {LogoImage, SearchIconButton} from '../component/ht-button';

const Main = (props: IMainProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitleAlign: 'left',
                headerTitle: ((props: any) => (<LogoImage/>)),
                headerRight: ((props: any) => <SearchIconButton navigation={navigation}/>),
                headerStyle : {
                    height: 110
                }
            },
        );
    }, []);

    return (
        <ScrollerLayout>
        </ScrollerLayout>
    );

};

export default React.memo(Main);
