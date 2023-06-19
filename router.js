import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import PostsScreen from './screens/mainScreen/postsScreen';
import CreateScreen from './screens/mainScreen/createScreen';
import ProfileScreen from './screens/mainScreen/profileScreen';
//import icons
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen options={{ headerShown: false, }} name="Login" component={LoginScreen} />
                <AuthStack.Screen options={{ headerShown: false, }} name="Register" component={RegisterScreen} />
            </AuthStack.Navigator>
        )
    }
    return (
        <MainTab.Navigator tabBarOptions={{showLabel:false}}>
            <MainTab.Screen options={{ headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <Entypo name="feather" size={24} color={color} />
                ),
            }} name="Posts" component={PostsScreen} />
            
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <Entypo name="plus" size={24} color={color} />
                ),
            }} name="Create" component={CreateScreen} />
            
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                  <Octicons name="people" size={24} color={color} />
                ),
            }} name="Profile" component={ProfileScreen} />
        </MainTab.Navigator>
    );
};