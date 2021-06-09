import React from 'react';
import {ScrollView} from 'react-native';
import {ScrollerAreaWrap, ScrollerViewWrap} from './layout.styled'
import {IScrollerLayout} from "./layout.interface";

// import {ScrollerAreaWrap, ScrollerViewWrap} from './shared.styled';

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
