import React, { useState } from 'react';
import {StyleSheet, TextInput as TextInputRN, TextInputProps} from 'react-native';

export function TextInput ({ ...rest }: TextInputProps) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <TextInputRN
            style={isFocus ? styles.buttonStyleFocus : styles.buttonStyle}
            placeholderTextColor='#808080'
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        paddingHorizontal: 10,
        color: '#F2F2F2',
        backgroundColor: '#262626',
        height: 50,
        borderRadius: 5,
    },
    buttonStyleFocus: {
        borderWidth: 1,
        borderColor: '#4EA8DE',
        paddingHorizontal: 10,
        color: '#F2F2F2',
        backgroundColor: '#262626',
        height: 50,
        borderRadius: 5,
    },
})
