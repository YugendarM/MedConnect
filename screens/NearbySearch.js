import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../tailwind'
import { useDeviceContext } from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Swiper from "react-native-screens-swiper";

import * as Location from "expo-location";
import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid, Alert } from 'react-native';

import Blood from '../components/NearbySearchTabs/Blood';
import Ambulance from '../components/NearbySearchTabs/Ambulance';
import Medicine from '../components/NearbySearchTabs/Medicine';
import Doctors from '../components/NearbySearchTabs/Doctors';
import Hospitals from '../components/NearbySearchTabs/Hospitals';


const NearbySearch = () => {

const [currentLocation,setCurrentLocation] = useState();
  
  useDeviceContext(tw);
  const navigation = useNavigation();

  const data = [
    {
        tabLabel: 'Blood',
        component: Blood
    },
    
    {
        tabLabel: 'Ambulance',
        component: Ambulance ,
    },

    {
      tabLabel: 'Medicine',
      component: Medicine,
    },

    {
      tabLabel: 'Doctors',
      component: Doctors,
    },

    {
      tabLabel: 'Hospitals',
      component: Hospitals,
    },

   
    
];

 
  return (
    <>
      <View style={tw`bg-white flex flex-col gap-5 h-full`}>
        <View style={tw`flex flex-row justify-between px-5 mt-16`}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>NearbySearch</Text>
          <Pressable ></Pressable>
        </View>

       


        <Swiper
            data={data}
            style={tw`h-full`}
        />


       
       

      </View>
    </>
  )
  
}

export default NearbySearch

const styles = StyleSheet.create({})