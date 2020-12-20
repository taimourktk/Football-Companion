import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}
function TeamsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Teams!</Text>
        </View>
    );
}
function TournamentsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tornaments!</Text>
        </View>
    );
}
function NotificationsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}
function TrackingScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tracking Screen</Text>
        </View>
    );
}
function GroundScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ground Screen</Text>
        </View>
    );
}
function InjuriesScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Injuries Screen</Text>
        </View>
    );
}
function ExercisesScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Exercises Screen</Text>
        </View>
    );
}
function SettingScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
        </View>
    );
}
function FeedBackScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>FeedBack Screen</Text>
        </View>
    );
}
function AboutScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DashBoard() {
    return (

        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home"    component={TabNavigator} />
                <Drawer.Screen name="Tracking App" component={TrackingScreen}/>
                <Drawer.Screen name="Grounds" component={GroundScreen} />
                <Drawer.Screen name="Injuries" component={InjuriesScreen} />
                <Drawer.Screen name="Exercises" component={ExercisesScreen} />
                <Drawer.Screen name="Setting" component={SettingScreen} />
                <Drawer.Screen name="FeedBack" component={FeedBackScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
          options={{
              tabBarLabel:'Home',
              tabBarIcon:({})=>(
                <AntDesign name="home" size={25} color="black" />
              )
          }}
            />
            <Tab.Screen name="Teams" component={TeamsScreen} 
             options={{
                tabBarLabel:'Teams',
                tabBarIcon:({})=>(
                    <MaterialCommunityIcons name="account-group-outline" size={26} color="black" />
                )
            }}
            />
            <Tab.Screen name="Tournaments" component={TournamentsScreen}
             options={{
                tabBarLabel:'Tournaments',
                tabBarIcon:({})=>(
                    <MaterialCommunityIcons name="tournament" size={26} color="black"/>
                )
            }} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} 
             options={{
                tabBarLabel:'Notifications',
                tabBarIcon:({})=>(
                    <MaterialIcons name="notifications-none" size={26} color="black" />               )
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen}
             options={{
                tabBarLabel:'Profile',
                tabBarIcon:({})=>(
                    <MaterialCommunityIcons name="account-outline" size={27} color="black" />
                )
            }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
})


export default DashBoard;
