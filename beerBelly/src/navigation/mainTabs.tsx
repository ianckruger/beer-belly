import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


// If I want, I can create my own tab bar and replace it here
// <Tab.Navigator tabBar={(props) => <MyCustomTabBar {...props} />} />
// but using this function from react is necessary to make sure that the navigation stack is maintained
export default function MainTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#111',
                height: 60,
            },
            }}>
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen name="ProfileTab" component={ProfileStack} />
            <Tab.Screen name="ListTab" component={ListStack} />
        </Tab.Navigator>
    );
}