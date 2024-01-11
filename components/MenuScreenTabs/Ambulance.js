import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AmbulanceCard from '../Cards/AmbulanceCard';
import axios from "axios";
import { ambulanceData } from '../Dataset/Dataset';

const Ambulance = () => {

  const navigation = useNavigation();

  // const [ambulances,setAmbulances] = useState([
  //   {
  //     name:"RS Ambulance Service",
  //     address:"poonamallee",
  //     time:"10",
  //     distance:3,
      
  //   },
  //   {
  //       name:"Vicha Emergencies",
  //       address:"poonamallee",
  //       time:"4",
  //       distance:1,
        
  //     },
  //     {
  //       name:"Vk Ambulances",
  //       address:"keelpauk",
  //       time:"30",
  //       distance:12,
        
  //     },
  //     {
  //       name:"RS Ambulance Service",
  //       address:"poonamallee",
  //       time:"10",
  //       distance:3,
        
  //     },
  //     {
  //       name:"Kaesy Ambulance service",
  //       address:"Chetpet",
  //       time:"35",
  //       distance:12,
        
  //     },
  //     {
  //       name:"Veera Ambulance Service",
  //       address:"Mangadu",
  //       time:"8",
  //       distance:2,
        
  //     },
  //     {
  //       name:"Md Mujahith Ambulance",
  //       address:"Manadi",
  //       time:"30",
  //       distance:18,
        
  //     },
  //     {
  //       name:"RS Ambulance Service",
  //       address:"poonamallee",
  //       time:"10",
  //       distance:3,
        
  //     },
  //     {
  //       name:"RS Ambulance Service",
  //       address:"poonamallee",
  //       time:"10",
  //       distance:3,
        
  //     },
  //     {
  //       name:"RS Ambulance Service",
  //       address:"poonamallee",
  //       time:"10",
  //       distance:3,
        
  //     },
    
  // ])

  const [ambulances, setAmbulances] = useState();

  useEffect(() => {
    const fetchAmbulance = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/ambulances");
        setAmbulances(response.data.Ambulance);
        
      }catch(error){
        console.log("error:",error);
      }
    }
    // fetchAmbulance();
    setAmbulances(ambulanceData);
  },[])
  console.log( "ambulance",ambulances);
  

  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Ambulance</Text>
          <Pressable ></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {ambulances.map((amb)=>(
        <AmbulanceCard {...amb}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={ambulances}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <AmbulanceCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Ambulance

const styles = StyleSheet.create({})