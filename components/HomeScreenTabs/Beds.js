import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BedCard from '../Cards/BedCard';
import axios from 'axios';
import { hospitalData } from "../Dataset/Dataset";

const Beds = () => {

  const navigation = useNavigation();

  const [hospitals,setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/hospitals");
        setHospitals(response.data.Hospital);
        console.log("hosp"+response.data.Hospital);
      }catch(error){
        console.log("error:",error);
      }
    }
    // fetchHospitals();
    setHospitals(hospitalData);
  },[])
  console.log( "hospitals",hospitals);


  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Beds</Text>
          <Pressable ><Ionicons name="search" size={32} color="black" /></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {beds.map((bed)=>(
        <BedCard {...bed}/>
      ))}
      
    </View>
      </ScrollView> */}


      <FlatList
        style={tw``}
        data={hospitals}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <BedCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Beds

const styles = StyleSheet.create({})