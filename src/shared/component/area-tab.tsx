import React, {useEffect, useState} from 'react';
import {IAreaTabProps, ITabItemProps} from './component.interface';
import {TabItemWrap, TabItemText, TabWrap} from './component.style';

const TabItem = (props: ITabItemProps) => {

    const {text, onPress, index, active} = props;

    return (
        <TabItemWrap
            activeOpacity={1}
            active={active}
            onPress={(event: any) => onPress(index)}>
            <TabItemText active={active}>{text}</TabItemText>
        </TabItemWrap>
    );
};

const AreaTab = (props: IAreaTabProps) => {

    const {data} = props;

    const [payload, setPayload] = useState([]);

    useEffect(() => {
        createByTabData(0, data);
    }, []);

    const _onPress = (index: number) => {
        // @ts-ignore
        createByTabData(index, payload);
    };

    const createByTabData = (index: number, payload: any[]) => {
        const _payload = payload.map((data, _index) => {
            const _copy = JSON.parse(JSON.stringify(data));
            const isActive = _index == index;
            return {
                ..._copy,
                active: isActive,
            };
        });
        // @ts-ignore
        setPayload(_payload); };

    return (
        <TabWrap>
            {
                payload.map((data: any, index: number) => (
                    <TabItem key={index}
                             text={data.text}
                             onPress={_onPress}
                             index={index}
                             active={data.active}/>
                ))
            }
        </TabWrap>
    );
};

export default AreaTab;
