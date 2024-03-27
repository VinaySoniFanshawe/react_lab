import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Screens from "../Utils/screen_names";
import TransactionList from "./Transaction_list";
import TransactionDetail from "./Transaction_Details";



const Stack = createStackNavigator()

function TransactionScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.transaction_list} component={TransactionList} />
            <Stack.Screen name={Screens.transaction_detail} component={TransactionDetail} />

        </Stack.Navigator>
    )
}

export default TransactionScreen