import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BloodCard from '../Cards/BloodCard';
import * as Location from "expo-location";
import axios from "axios";
import { bloodData } from '../Dataset/Dataset';



const Blood = () => {

  const navigation = useNavigation();
  const [bloodr,setBlood] = useState([]);
  const [location, setLocation] = useState();
  // const [distance, setDistance] = useState("");
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

    const fetchBloods = async() => {
      getLocation();
      try{
        const response = await axios.get("http://192.168.29.43:8000/blood");
        setBlood(response.data.Blood);
        
      }catch(error){
        console.log("error:",error);
      }
    }
    fetchBloods();
    setBlood(bloodData)

    
}, []);

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancer = R * c; // Distance in kilometers

  return distancer;
}

function deg2rad(deg){
  return deg * (Math.PI / 180);
};


console.log( "blood ugjy",bloodr);

const filteredBlood = bloodr.filter((bld) => {
  // setDistance(calculateDistance(location.coords.latitude,location.coords.longitude,bld.location.lat,bld.location.lon).toFixed(1));
  distance = calculateDistance(13.0461852,80.0932303,bld.location.lat,bld.location.lon).toFixed(1);
  
  console.log("blood distance",distance);
  return distance < 10;
});
// setDistance(dista)
// bloodr.map((bld) => {
//   setDistance(calculateDistance(location.coords.latitude,location.coords.longitude,bld.location.lat,bld.location.lon).toFixed(1));
//   const time = (distance/(30/60)).toFixed(0);
// })



// filteredBlood.distance = distance;
// console.log("fff"+filteredBlood.distance);
// filteredBlood.distance = distance;

  
  return (

    <>
      <View style={tw`pt-3 pb-10`}>
      <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {/* {bloodr.map((bld)=>
        {
          const distance = calculateDistance(location.coords.latitude,location.coords.longitude,bld.location.lat,bld.location.lon).toFixed(1) ;
          console.log("blooddistance",distance);
          if(distance < 10){
            (
              <BloodCard dist = {distance} {...bld}/>
            )
          }
        }
      )} */}
      
    </View>
      </ScrollView>

      <FlatList
        style={tw``}
        data={filteredBlood}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <BloodCard dist = {distance}  {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Blood

const styles = StyleSheet.create({})