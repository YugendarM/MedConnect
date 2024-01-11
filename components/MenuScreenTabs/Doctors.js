import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DoctorCard from '../Cards/DoctorCard';
import axios from 'axios';
import { doctorData } from '../Dataset/Dataset';

const Doctor = () => {

  const navigation = useNavigation();

  
  const [doctors,setDoctors] = useState();

  useEffect(() => {
    const fetchDoctors = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/doctors");
        setDoctors(response.data.Doctor);
        
      }catch(error){
        console.log("error:",error);
      }
    }
    // fetchDoctors();
    setDoctors(doctorData)
  },[])
  console.log( "doctors",doctors);

  
  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Doctors</Text>
          <Pressable ></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {doctors.map((doc)=>(
        <DoctorCard {...doc}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={doctors}
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