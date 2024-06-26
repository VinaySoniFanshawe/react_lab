import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

function TransactionDetail({ route , transactions}) {
    const { id } = route.params;
    const transaction = transactions.find((transaction) => transaction.id == id);
    return (
        <View>
            <View style={styles.detailsContainer}>
                <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
                <Text style={styles.store}>{transaction.storeName}</Text>
                <Text style={styles.location}>{transaction.location}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.date}>Transaction date: </Text>
                <Text style={styles.date}>{transaction.date}</Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.data,
});

export default connect(mapStateToProps, null)(TransactionDetail);

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: "#D4F1F4",
        padding: 50,
        borderRadius: 5,
    },
    store: {
        fontSize: 18,
        margin: 5,
        textAlign: "center",
    },
    amount: {
        fontSize: 30,
        fontWeight: "bold",
        color: "green",
        textAlign: "center",
    },
    location: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    date: {
        fontSize: 18,
        color: "gray",
    },
});
