import React from 'react';
import {ScrollView} from 'react-native';
import {IScrollerLayout} from './shared.interface';
import {ScrollerAreaWrap, ScrollerViewWrap} from './shared.styled';

const ScrollerLayout = (props: IScrollerLayout) => {

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

export default ScrollerLayout;
