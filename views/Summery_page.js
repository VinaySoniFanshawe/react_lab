import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Finance_model from '../Database/Finance_model';

function SummaryScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Transactions</Text>
                <Text style={styles.amount}>{Finance_model.count}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Balance</Text>
                <Text style={styles.amount}>${Finance_model.total.toFixed(2)}</Text>
            </View>

            <Text style={[styles.title, { paddingTop: 10 }]}>High Spending</Text>

            <View style={[styles.row, { paddingStart: 20 }]}>
                <Text style={styles.subtitle}>{Finance_model.max.storeName}</Text>
                <Text style={styles.amount}>${Finance_model.max.amount.toFixed(2)}</Text>
            </View>
            <Text style={[styles.title, { paddingTop: 10 }]}>Low Spending</Text>
            <View style={[styles.row, { paddingStart: 20 }]}>
                <Text style={styles.subtitle}>{Finance_model.min.storeName} </Text>
                <Text style={styles.amount}>${Finance_model.min.amount.toFixed(2)}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: "grey",
        borderBottomWidth: 0.5
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    amount: {
        fontSize: 18,
        fontWeight: '600',
    }
});

export default SummaryScreen;
