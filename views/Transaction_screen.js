import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Modal, View, Alert, TextInput, Button, StyleSheet } from 'react-native';
import Screens from "../Utils/screen_names";
import TransactionList from "./Transaction_list";
import TransactionDetail from "./Transaction_Details";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { DB } from "../Database/data";
import Transaction from "../Database/transaction_model";
import { addTransaction, updateValues } from "../Redux/financeActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Stack = createStackNavigator()

function TransactionScreen({ navigation, addTransaction, updateValues }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [storeName, setStoreName] = useState('');
    const [amount, setAmount] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleSave = async () => {

        if (!storeName || !amount || !location || !date) {
            Alert.alert('Validation Error', 'Please fill in all fields.');
            return;
        }
        var transaction = new Transaction(storeName, parseInt(amount), location, date)
        transaction = await DB.addTransaction(transaction) 
        addTransaction(transaction)
        updateValues()

        setStoreName('');
        setAmount('');
        setLocation('');
        setDate('');

        toggleModal();
    };
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={Screens.transaction_list} component={TransactionList}
                    options={{
                        title: Screens.transaction_list,
                        headerRight: () => (
                            <TouchableOpacity onPress={toggleModal}>
                                <FontAwesome6 name="plus" size={24} color="black" style={{ marginRight: 15 }} />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen name={Screens.transaction_detail} component={TransactionDetail} />

            </Stack.Navigator>
            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            placeholder="Store Name"
                            value={storeName}
                            onChangeText={text => setStoreName(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Amount"
                            value={amount}
                            onChangeText={text => setAmount(text)}
                            keyboardType="numeric"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Location"
                            value={location}
                            onChangeText={text => setLocation(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Date"
                            value={date}
                            onChangeText={text => setDate(text)}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Save" onPress={handleSave} style={styles.button} />
                            <Button title="Close" onPress={toggleModal} style={styles.button} />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addTransaction,
    updateValues
}, dispatch);

export default connect(null, mapDispatchToProps)(TransactionScreen);


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '70%'
    },
    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 15
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 3,

    }
});