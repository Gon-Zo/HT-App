import React, {useEffect, useState} from 'react';
import {IHtTab, ITabItemProps} from './component.interface';
import {TapItemWrap, TapItemText, TapWrap} from './ht-tap.styled';

const TapItem = (props: ITabItemProps) => {

    const {text, onPress, index, active} = props;

    return (
        <TapItemWrap
            activeOpacity={1}
            active={active}
            onPress={(event) => onPress(index)}>
            <TapItemText active={active}>{text}</TapItemText>
        </TapItemWrap>
    );
};

const HtTab = (props: IHtTab) => {

    const {data} = props;

    const [payload, setPayload] = useState([]);

    useEffect(() => {
        createByTabData(0, data);
    }, []);

    const _onPress = (index: number) => {
        // @ts-ignore
        createByTabData(index, payload);
    };

    const createByTabData = (index: number, payload: []) => {
        const _payload = payload.map((data, _index) => {
            const _copy = JSON.parse(JSON.stringify(data));
            const isActive = _index == index;
            return {
                ..._copy,
                active: isActive,
            };
        });
        // @ts-ignore
        setPayload(_payload);
    };

    return (
        <TapWrap>
            {
                payload.map((data: any, index: number) => (
                    <TapItem key={index}
                             text={data.text}
                             onPress={_onPress}
                             index={index}
                             active={data.active}/>
                ))
            }
        </TapWrap>
    );
};

export default HtTab;
