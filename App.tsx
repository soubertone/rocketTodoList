import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Logo from './src/Assets/logo-primaria.svg';
import {TextInput} from './src/Components/TextInput';
import {Button} from './src/Components/Button';
import ListTask from './src/Components/ListTask/Index';
import {EvilIcons} from "@expo/vector-icons";
import {TaskList} from "./src/@types/task";
import {Loading} from "./src/Components/Loading";

export default function App() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<TaskList>([]);
    const [filterStatus, setFilterStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleAddNewTask () {
        setTasks([...tasks, {
            title: newTask,
            completed: false,
        }])
        setNewTask('');
    }

    function handleCheckboxItem (isChecked, taskTitle) {
        let newTasks = tasks.map((task) => {
            if (task.title === taskTitle) {
                task.completed = isChecked;
            }
            return task;
        });

        setTasks(newTasks);
    }

    function handleDeleteItem (index) {
        setIsLoading(true);
        let newTasks = tasks;
        newTasks.splice(index, 1);

        setTimeout(() => {
            setTasks(newTasks);
            setIsLoading(false);
        }, 1000)
    }

    return (
        <View>
            <StatusBar translucent style='light'/>
            <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>

                <View style={styles.header}>
                    <View style={styles.boxHeading}>
                        <Logo width={130} height={130} />
                    </View>

                    <View style={styles.sectionFormHeader}>
                        <View style={styles.sectionFormInput}>
                            <TextInput
                                placeholder='Adicione uma nova tarefa'
                                onChangeText={(newTask) => setNewTask(newTask)}
                                value={newTask}
                            />
                        </View>
                        <View style={styles.sectionFormButton}>
                            <Button title='+' onPress={handleAddNewTask}>
                                <EvilIcons name='plus' size={24} color='white' />
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.sectionContent}>
                    <View style={styles.sectionCounter}>
                        <TouchableOpacity onPress={() => setFilterStatus(false)}>
                            <View style={{
                                marginRight: 150,
                                marginTop: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: filterStatus ? '#4EA8DE' : '#3d7a9f',
                                }}>
                                    Criadas
                                </Text>
                                <View style={{
                                    backgroundColor: '#3A3A3A',
                                    padding: 5,
                                    marginLeft: 5,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                    }}>
                                        {tasks.filter((task) => task.completed === false).length}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilterStatus(true)}>
                            <View style={{
                                marginRight: 0,
                                marginTop: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: filterStatus ? '#5758a4' : '#8284FA',
                                }}>
                                    Concluidas
                                </Text>
                                <View style={{
                                    backgroundColor: '#3A3A3A',
                                    padding: 5,
                                    marginLeft: 5,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                    }}>
                                        {tasks.filter((task) => task.completed === true).length}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    { isLoading
                        ? <Loading color={filterStatus ? "#8284FA" : "#4EA8DE"} />
                        : <ListTask
                            data={tasks.filter((task) => task.completed === filterStatus)}
                            onCheckItem={(isChecked, key) => handleCheckboxItem(isChecked, key)}
                            onDeleteItem={(index) => handleDeleteItem(index)}
                            status={filterStatus}
                        />
                    }
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
    },
    header: {
       backgroundColor: '#000',
        paddingVertical: 50,
        width: '100%',
        justifyContent: 'center',
    },
    boxHeading: {
        width: '100%',
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxHeadingText: {
        color: '#c6c6c6',
        fontSize: 20,
        fontWeight: 'bold',
    },

    sectionFormHeader: {
        position: 'absolute',
        paddingTop: 150,
        marginTop: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    sectionFormInput: {
        width: '80%',
        marginRight: 5,
    },
    sectionFormButton: {
        width: '15%',
        marginLeft: 5,
    },

    sectionContent: {

    },
    sectionCounter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
        marginHorizontal: 20,
    }
});
