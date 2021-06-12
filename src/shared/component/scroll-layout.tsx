import React from 'react';
import {ScrollView} from 'react-native';
import {IScrollerLayout} from "./component.interface";
import {ScrollerAreaWrap, ScrollerViewWrap} from './component.style';

const ScrollLayout = (props: IScrollerLayout) => {

    const {children} = props;

    return (
        <ScrollerAreaWrap>
            <ScrollView>
                <ScrollerViewWrap>
                    {children}
                </ScrollerViewWrap>
            </ScrollView>
        </ScrollerAreaWrap>
    );
};

export default ScrollLayout;
