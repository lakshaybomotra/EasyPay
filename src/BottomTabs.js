import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home/Home";
import Transactions from "./Screens/Transactions/Transactions";
import Profile from "./Screens/Profile/Profile";
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'green',
            }}
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: () => (
                        <Icon name='home' size={20} />
                    )
                }}
            />
            <Tab.Screen name='Transactions' component={Transactions}
                options={{
                    tabBarIcon: () => (
                        <Icon name='gear' size={20} />
                    )
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Icon name='user' size={20} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}