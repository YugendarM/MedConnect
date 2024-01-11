import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DoctorCard from '../Cards/DoctorCard';
import * as Location from "expo-location";
import axios from 'axios';
import { doctorData } from '../Dataset/Dataset';

const Doctor = () => {

  const navigation = useNavigation();


  const [doctors,setDoctors] = useState([]);
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

    const fetchDoctors = async() => {
      getLocation();
      
    try{
      const response = await axios.get("http://192.168.29.43:8000/doctors");
      setDoctors(response.data.Doctor);
    }catch(error){
      console.log("error:",error);
    }
  }
  
  fetchDoctors();
setDoctors(doctorData);
  

   
}, []);

console.log(doctors);

  const filteredDoctors = doctors.filter((doc) => {
    distance = calculateDistance(13.0461852,80.0932303,doc.location.lat,doc.location.lon).toFixed(1);
  //  setDistance(dist);
   console.log("doctor distance"+distance);
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
      {doctors.map((doc)=>(
        <DoctorCard {...doc}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={filteredDoctors}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <DoctorCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Doctor

const styles = StyleSheet.create({})