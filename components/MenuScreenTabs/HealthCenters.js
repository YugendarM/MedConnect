import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HospitalCard from '../Cards/HospitalCard';
import axios from "axios";
import { healthcenterData } from '../Dataset/Dataset';

const HealthCenters = () => {

  const navigation = useNavigation();
  const [healthCenters,setHealthCenters] = useState([]);

  useEffect(() => {
    const fetchHealthCenter = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/healthcenter");
        setHealthCenters(response.data.HealthCenter);
        
      }catch(error){
        console.log("error:",error);
      }
    }
    // fetchHealthCenter();
    setHealthCenters(healthcenterData);
  },[])
  console.log( "healthCenter",healthCenters);


  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Health Centers</Text>
          <Pressable ></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {healthCenters.map((doc)=>(
        <HospitalCard {...doc}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={healthCenters}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <HospitalCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default HealthCenters

const styles = StyleSheet.create({})