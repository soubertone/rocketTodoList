import {FlatList as FlatListRN, StyleSheet, TouchableOpacity, View} from 'react-native';
import {EmptyList} from "./EmptyList";
import {TaskList} from "../../@types/task";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {EvilIcons} from "@expo/vector-icons";

type Props = {
    data: TaskList,
    onCheckItem: (isChecked: boolean, key: string) => void,
    onDeleteItem: (index: number) => void,
    status: boolean,
}

export default function FlatList ({ data, onCheckItem, onDeleteItem, status }: Props) {
    return (
        <FlatListRN
            data={data}
            renderItem={(rowData) => {
                const { item } = rowData;
                return (
                    <View style={styles.contentItem}>
                        <BouncyCheckbox
                            size={23}
                            fillColor={item.completed ? "#8284FA" : "#4EA8DE"}
                            text={item.title}
                            iconStyle={{ borderColor: item.completed ? "#8284FA" : "#4EA8DE" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ color: item.completed ? '#808080' : '#F2F2F2' }}
                            onPress={(isChecked) => onCheckItem(isChecked, item.key)}
                            isChecked={item.completed}
                        />

                        <TouchableOpacity onPress={() => onDeleteItem(rowData.index)}>
                            <EvilIcons
                                name="trash"
                                size={22}
                                color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                )
            }}
            ListEmptyComponent={<EmptyList status={status} />}
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            style={styles.contentList}
        />
    )
}

const styles = StyleSheet.create({
    contentList: {
        paddingHorizontal: 20,
    },
    contentItem: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#262626',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
})
