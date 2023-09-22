import React, {ReactNode} from 'react';
import {ButtonProps, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

type Props = ButtonProps & {
    title?: String,
    children?: ReactNode
};

export function Button ({title, children, ...rest}: Props) {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            {...rest}
        >
            {children ? children : title}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 45,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonTextStyle: {
    },
});
