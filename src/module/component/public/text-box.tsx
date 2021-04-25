import React, {useEffect, useState} from 'react';
import {ITextBox} from './component.interface';
import {TextBoxWrap, TextBoxText} from './component.styled';

const TextBox = (props: ITextBox) => {

    const {text} = props;

    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(text);
    }, [text]);

    return (
        <TextBoxWrap>
            <TextBoxText>
                {title}
            </TextBoxText>
        </TextBoxWrap>
    );

};

export default TextBox;
