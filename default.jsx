import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, Alert, Dimensions, TouchableOpacity, CheckBox } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        task1A: 'Enter task here',
        task2A: '',
        task3A: '',
        task4A: '',
        task5A: '',
        task6A: '',
        task7A: '',
        task1: 'Task appears here',
        task2: ' ',
        task3: ' ',
        task4: ' ',
        task5: ' ',
        task6: ' ',
        task7: ' ',
        checkBox: '',
        checkBox1: ' ',
        editPageDisplay: 'block',
        viewPageDisplay: 'none',
        isChecked1: false,
        isChecked2: false,
        isChecked3: false,
        isChecked4: false,
        isChecked5: false,
        isChecked6: false,
        isChecked7: false,
    };
    
    handleEditPagePress = () => this.setState(state => ({
        editPageDisplay: 'block',
        viewPageDisplay: 'none',
    }));

    handleViewPagePress = () => this.setState(state => ({
        editPageDisplay: 'none',
        viewPageDisplay: 'block',
    }));
    
    addTask1 = () => this.setState(state => ({
        task1: this.state.task1A,
    }));
    
    addTask2 = () => this.setState(state => ({
        task2: this.state.task2A,
    }));
    
    addTask3 = () => this.setState(state => ({
        task3: this.state.task3A,
    }));
    
    addTask4 = () => this.setState(state => ({
        task4: this.state.task4A,
    }));
    
    addTask5 = () => this.setState(state => ({
        task5: this.state.task5A,
    }));
    
    addTask6 = () => this.setState(state => ({
        task6: this.state.task6A,
    }));
    
    addTask7 = () => this.setState(state => ({
        task7: this.state.task7A,
    }));
    
    check = (id) => {
        if (id === 1) {
            this.setState({ isChecked1: !this.state.isChecked1 });
        }
        else if (id === 2) {
            this.setState({ isChecked2: !this.state.isChecked2 });
        }
        else if (id === 3) {
            this.setState({ isChecked3: !this.state.isChecked3 });
        }
        else if (id === 4) {
            this.setState({ isChecked4: !this.state.isChecked4 });
        }
        else if (id === 5) {
            this.setState({ isChecked5: !this.state.isChecked5 });
        }
        else if (id === 6) {
            this.setState({ isChecked6: !this.state.isChecked6 });
        }
        else if (id === 7) {
            this.setState({ isChecked7: !this.state.isChecked7 });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/48f3096cb738a54be60c8f877004dbdd' }}
                        style={{ flex:1 }}
                    />
                </View>
                <View style={{ display: this.state.editPageDisplay }}>
                    <View style={styles.tasksContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task1A) => this.setState({task1A})}
                                value={this.state.task1A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask1}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task2A) => this.setState({task2A})}
                                value={this.state.task2A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask2}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task3A) => this.setState({task3A})}
                                value={this.state.task3A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask3}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task4A) => this.setState({task4A})}
                                value={this.state.task4A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask4}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task5A) => this.setState({task5A})}
                                value={this.state.task5A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask5}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task6A) => this.setState({task6A})}
                                value={this.state.task6A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask6}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput style = {styles.inputValue}
                                onChangeText={(task7A) => this.setState({task7A})}
                                value={this.state.task7A}
                                clearTextOnFocus = {true}
                            />
                            <TouchableOpacity style={styles.button} 
                                onPress={this.addTask7}
                            >
                                <Text style={styles.buttonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ display: this.state.viewPageDisplay }}>
                    <View style={styles.tasksContainer}>
                        <View style={styles.inputContainer}>
                            <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task1}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked1 && styles.checked]}
                                onPress={() => this.check(1)}
                            >
                                {this.state.isChecked1 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>    
                            <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task2}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked2 && styles.checked]}
                                onPress={() => this.check(2)}
                            >
                                {this.state.isChecked2 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                           <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task3}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked3 && styles.checked]}
                                onPress={() => this.check(3)}
                            >
                                {this.state.isChecked3 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>    
                            <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task4}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked4 && styles.checked]}
                                onPress={() => this.check(4)}
                            >
                                {this.state.isChecked4 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>    
                            <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task5}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked5 && styles.checked]}
                                onPress={() => this.check(5)}
                            >
                                {this.state.isChecked5 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>  
                            <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task6}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked6 && styles.checked]}
                                onPress={() => this.check(6)}
                            >
                                {this.state.isChecked6 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>    
                            <View style={styles.item}>
                                <Text style={styles.inputValue}>
                                    {this.state.task7}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.check, this.state.isChecked7 && styles.checked]}
                                onPress={() => this.check(7)}
                            >
                                {this.state.isChecked7 && <Text style={styles.checkmark}>✓</Text>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>  
                <View style={styles.navbarContainer}>
                    <TouchableOpacity style={styles.editButton}
                    onPress={this.handleEditPagePress}
                    >
                        <View style={styles.navButton}>
                            <ImageBackground
                                style={styles.navButton}
                                source={{ uri: 'https://codehs.com/uploads/c1271a54be7082082267796857b0a754' }}
                            >
                                <View style={styles.responseButtonText}>
                                    Edit
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewButton}
                    onPress={this.handleViewPagePress}
                    >
                        <View style={styles.navButton}>
                            <ImageBackground
                                style={styles.navButton}
                                source={{ uri: 'https://codehs.com/uploads/c1271a54be7082082267796857b0a754' }}
                            >
                                <View style={styles.responseButtonText}>
                                    View
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    titleContainer: {
        height: deviceHeight/9,
        width: deviceWidth,
        backgroundColor: 'lightBlue',
        justifyContent: 'flex-end',
        textAlign: 'center'
    },
    inputValue: {
        backgroundColor: "white",
        textAlign: "center",
        fontSize: 20,
        flex: 1,
        color: 'lightgrey',
    },
    item: {
        backgroundColor: "white",
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        flex: 1,
        color: 'lightgrey',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems:'center',

    },
    buttonText: {
        color: 'white',
        fontSize: deviceWidth/8,
    },
    button: {
        backgroundColor: "lightblue",
        height: deviceHeight/9.2,
        width: deviceWidth/6,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    check: {
        backgroundColor: "white",
        height: deviceHeight/9.2,
        width: deviceWidth/6,
        borderWidth: 3,
        borderColor: 'lightgrey',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    tasksContainer: {
        flex: 1,
    },
    navbarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'white',
        marginBottom: 25,
    },
    responseButtonText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    navButton: {
        height: deviceHeight/8,
        width: deviceWidth/2,
        borderColor: 'white',
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: '#337f35',
    },
    checkmark: {
        color: 'white',
        fontSize: 30,
    },
});