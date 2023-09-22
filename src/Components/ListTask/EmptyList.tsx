import {View, Text, StyleSheet} from 'react-native';
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
    status: boolean,
};

export function EmptyList ({ status }: Props) {
    return (
        <View style={styles.content}>
            <View style={styles.contentGroup}>
                <FontAwesome5
                    name="clipboard"
                    size={100}
                    color="#808080"
                />
                <View style={styles.contentGroupText}>
                    <Text style={{...styles.text, fontWeight: "bold" }}>
                        Você ainda não tem tarefas {status ? "conclúidas" : "cadastradas"}
                    </Text>
                    <Text style={styles.text}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        borderTopColor: '#333333',
        borderTopWidth: 1,
    },
    contentGroup: {
        marginTop: 20,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    contentGroupText: {
        marginTop: 10,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    text: {
        color: "#808080",
        fontSize: 12,
    },
})
