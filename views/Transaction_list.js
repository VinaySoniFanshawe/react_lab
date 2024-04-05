import { View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";
import Finance_model from "../Database/Finance_model";
import Screens from "../Utils/screen_names";
import { FontAwesome6 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { DB } from "../Database/data";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function TransactionList({ navigation, transactions, count }) {

    return (
        <View>

            <FlatList
                data={transactions}
                style={styles.flatListStyle}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => navigation.navigate(Screens.transaction_detail, { id: item.id })}
                        >
                            <Text style={styles.listItemText}>{item.storeName}</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ paddingRight: 6, fontWeight: '600' }}>{`$${item.amount.toFixed(2)}`}</Text>
                                <FontAwesome6 name="arrow-right" />
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />

            <Text style={styles.bottomCount}>{`${count} Transactions`}</Text>
        </View>

    )
}

const mapStateToProps = (state) => ({
    transactions: state.data,
    count: state.count,
});

export default connect(mapStateToProps, null)(TransactionList);

const styles = StyleSheet.create({
    listItem: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.5
    },
    listItemText: {
        flex: 1,
        fontSize: 16,
        fontWeight: "400"
    },
    bottomCount: {
        fontSize: 18,
        paddingTop: 15,
        color: "gray",
        textAlign: "center"
    }

});


// export default TransactionList