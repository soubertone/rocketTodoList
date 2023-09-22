import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

export function Loading ({ ...rest }: ActivityIndicatorProps) {
    return (
        <ActivityIndicator
            size="large"
            color="#4EA8DE"
            {...rest}
        />
    )
}
