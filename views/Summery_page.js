import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function SummaryScreen({navigation, count, max, min, total }) {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Transactions</Text>
                <Text style={styles.amount}>{count}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Balance</Text>
                <Text style={styles.amount}>${(total ?? 0).toFixed(2)}</Text>
            </View>

            <Text style={[styles.title, { paddingTop: 10 }]}>High Spending</Text>

            <View style={[styles.row, { paddingStart: 20 }]}>
                <Text style={styles.subtitle}>{max?.storeName ?? ""}</Text>
                <Text style={styles.amount}>${(max?.amount ?? 0).toFixed(2)}</Text>
            </View>
            <Text style={[styles.title, { paddingTop: 10 }]}>Low Spending</Text>
            <View style={[styles.row, { paddingStart: 20 }]}>
                <Text style={styles.subtitle}>{min?.storeName ?? ""} </Text>
                <Text style={styles.amount}>${(min?.amount ?? 0).toFixed(2)}</Text>
            </View>

        </View>
    );
}

const mapStateToProps = (state) => ({
    count: state.count,
    max: state.max,
    min: state.min,
    total : state.total,
});

export default connect(mapStateToProps, null)(SummaryScreen);

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

