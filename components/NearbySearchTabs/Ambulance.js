import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AmbulanceCard from '../Cards/AmbulanceCard';
import * as Location from "expo-location";
import { ambulanceData } from '../Dataset/Dataset';
// import { Platform, PermissionsAndroid, Alert } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import BackgroundGeolocation from 'react-native-background-geolocation';
// import LocationPicker from 'react-native-location-picker';





const Ambulance = () => {

  const [ambulances,setAmbulances] = useState([]);
    const [location, setLocation] = useState(null);
    var distance = 0;

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log("lcatasdfioaoi",location);
        
        
        console.log('Location:', location.coords);
        // Access latitude and longitude: location.coords.latitude, location.coords.longitude
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

      const fetchAmbulance = async() => {
    getLocation();
        
      try{
        const response = await axios.get("http://192.168.29.43:8000/ambulances");
        // setAmbulances(response.data.Ambulance);
      }catch(error){
        console.log("error:",error);
      }
    }
    fetchAmbulance();
    setAmbulances(ambulanceData);

    

     
}, []);

    const filteredAmbulance = ambulances.filter((ambu) => {
      distance = calculateDistance(13.0461852,80.0932303,ambu.location.lat,ambu.location.lon).toFixed(1);
    //  setDistance(dist);
     console.log("ambulance distance"+distance);
     return distance < 10;
   });


  const time = (distance/(30/60)).toFixed(0);

  


  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
  
    return distance;
  }

  function deg2rad(deg){
    return deg * (Math.PI / 180);
  };

  

  return (

    <>
      <View style={tw`mt-3 pb-10`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {ambulances.map((amb)=>(
        <AmbulanceCard {...amb}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={filteredAmbulance}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <AmbulanceCard distance = {distance} time = {time} {...item} />
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Ambulance

const styles = StyleSheet.create({})