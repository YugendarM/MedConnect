import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EmergencyCard from '../Cards/EmergencyCard';
import axios from 'axios';
import { requestData } from '../Dataset/Dataset';


const Emergencies = () => {

  const navigation = useNavigation();

  

  // const[emergencies, setEmergencies] = useState([]);
  // useEffect(() => {
  //   const fetchEmergencies = async() => {
  //     try{
  //       const response = await axios.get("http://192.168.29.43:8000/requests");
  //       setEmergencies(response.data.Request);
  //       console.log("request"+response.data.Request);
  //     }catch(error){
  //       console.log("error:",error);
  //     }
  //   }
    
    
  //   fetchEmergencies();
  // },[])
  // console.log( "REquests",emergencies);

  const [requests,setRequest] = useState([]);


  useEffect(() => {
    const fetchRequest = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/requests");
        setRequest(response.data.Request);
        console.log("request"+response.data.Request);
      }catch(error){
        console.log("error:",error);
      }
    }
    
    
      // fetchRequest();
      setRequest(requestData);
  },[])
  console.log( "REquests",requests);

  const emergencies = requests.filter((item) => {
    if(item.emergency){
      return item;
    }
  })



  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Emergency Cases</Text>
          <Pressable ><Ionicons name="search" size={32} color="black" /></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {emergencies.map((emerg)=>(
        <EmergencyCard {...emerg}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={emergencies}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <EmergencyCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Emergencies

const styles = StyleSheet.create({})