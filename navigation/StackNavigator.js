import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "../screens/MenuScreen";
import NearbySearch from "../screens/NearbySearch";
import RequestsScreen from "../screens/RequestsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import tw from "../tailwind";
import { useDeviceContext } from "twrnc";
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import Blood from "../components/NearbySearchTabs/Blood";
import Ambulance from "../components/NearbySearchTabs/Ambulance";
import Medicine from "../components/NearbySearchTabs/Medicine";
import Doctor from "../components/NearbySearchTabs/Doctors";
import Hospital from "../components/NearbySearchTabs/Hospitals";
import Beds from "../components/HomeScreenTabs/Beds";
import Emergencies from "../components/HomeScreenTabs/Emergencies";
import RequestResource from "../components/HomeScreenTabs/RequestResource";

import MenuBlood from "../components/MenuScreenTabs/Blood";
import MenuMedicine from "../components/MenuScreenTabs/Medicine";
import MenuAmbulance from "../components/MenuScreenTabs/Ambulance";
import MenuDoctors from "../components/MenuScreenTabs/Doctors";
import MenuHealthCenters from "../components/MenuScreenTabs/HealthCenters";
import MenuHospitals from "../components/MenuScreenTabs/Hospitals";
import MenuMedicalSupplies from "../components/MenuScreenTabs/MedicalSupplies";


import HospitalProfile from "../components/Profiles/HospitalProfile";
import DoctorProfile from "../components/Profiles/DoctorProfile";
import RequestProfile from "../components/Profiles/RequestProfile";
import MedicineProfile from "../components/Profiles/MedicineProfile";
import BloodProfile from "../components/Profiles/BloodProfile";
import AmbulanceProfile from "../components/Profiles/AmbulanceProfile";



function BottomTabs() {
  useDeviceContext(tw);
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator screenOptions={{
    tabBarStyle: { position: 'absolute' },
  }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#4DA8F6" },
            // borderBlockColor: "#4DA8F6",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <>
                <Entypo name="home" size={24} color="#4DA8F6" />
                <BottomTabBarHeightContext.Consumer>
                  {tabBarHeight => (
                    <View style={tw`bg-[#4DA8F6] h-1 rounded-b-full w-12 absolute top-0`}></View>
                  )}
                </BottomTabBarHeightContext.Consumer>

                </>
                
              ) : (
                <AntDesign name="home" size={24} color="#4DA8F6" />
              ),
          }}
        />

        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: "Menu",
            tabBarLabelStyle: { color: "#4DA8F6" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <>
                <Ionicons name="menu" size={24} color="#4DA8F6" />
                <BottomTabBarHeightContext.Consumer>
                  {tabBarHeight => (
                    <View style={tw`bg-[#4DA8F6] h-1 rounded-b-full w-12 absolute top-0`}></View>
                  )}
                </BottomTabBarHeightContext.Consumer>
                </>
                
              ) : (
                <Ionicons name="menu-outline" size={24} color="#4DA8F6" />
              ),
          }}
        />

        <Tab.Screen
          name="NearbySearch"
          component={NearbySearch}
          options={{
            tabBarLabel: "Nearby Search",
            tabBarLabelStyle: { color: "#4DA8F6" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <>
                <Ionicons name="location" size={24} color="#4DA8F6" />
                <BottomTabBarHeightContext.Consumer>
                  {tabBarHeight => (
                    <View style={tw`bg-[#4DA8F6] h-1 rounded-b-full w-12 absolute top-0`}></View>
                  )}
                </BottomTabBarHeightContext.Consumer>
                </>
              ) : (
                <Ionicons name="location-outline" size={24} color="#4DA8F6" />
              ),
          }}
        />

        <Tab.Screen
          name="Requests"
          component={RequestsScreen}
          options={{
            tabBarLabel: "Requests",
            tabBarLabelStyle: { color: "#4DA8F6" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <>
                <MaterialCommunityIcons name="hand-coin" size={24} color="#4DA8F6" />
                <BottomTabBarHeightContext.Consumer>
                  {tabBarHeight => (
                    <View style={tw`bg-[#4DA8F6] h-1 rounded-b-full w-12 absolute top-0`}></View>
                  )}
                </BottomTabBarHeightContext.Consumer>
                </>
              ) : (
                <MaterialCommunityIcons name="hand-coin-outline" size={24} color="#4DA8F6" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "profile",
            tabBarLabelStyle: { color: "#4DA8F6" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <>
                <Ionicons name="person" size={24} color="#4DA8F6" />
                <BottomTabBarHeightContext.Consumer>
                  {tabBarHeight => (
                    <View style={tw`bg-medBlue h-1 rounded-b-full w-12 absolute top-0`}></View>
                  )}
                </BottomTabBarHeightContext.Consumer>
                </>
              ) : (
                <Ionicons name="person-outline" size={24} color="#4DA8F6" />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Beds"
          component={Beds}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Emergencies"
          component={Emergencies}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RequestResource"
          component={RequestResource}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="MenuBlood"
          component={MenuBlood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuMedicine"
          component={MenuMedicine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuAmbulance"
          component={MenuAmbulance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuDoctors"
          component={MenuDoctors}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuHealthCenters"
          component={MenuHealthCenters}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuHospitals"
          component={MenuHospitals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuMedicalSupplies"
          component={MenuMedicalSupplies}
          options={{ headerShown: false }}
        />



        <Stack.Screen
          name="HospitalProfile"
          component={HospitalProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmbulanceProfile"
          component={AmbulanceProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RequestProfile"
          component={RequestProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineProfile"
          component={MedicineProfile}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="BloodProfile"
          component={BloodProfile}
          options={{ headerShown: false }}
        />

        
        <Stack.Screen
          name="Ambulance"
          component={Ambulance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medicine"
          component={Medicine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hospital"
          component={Hospital}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
