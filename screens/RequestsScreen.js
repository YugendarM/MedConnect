import { StyleSheet, Text, View, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../tailwind'
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import RequestCard from "../components/Cards/RequestCard";
import axios from "axios"
import { requestData } from '../components/Dataset/Dataset';


const RequestsScreen = () => {

  const navigation = useNavigation();

  const [requests,setRequest] = useState([]);
    // const [ambulances, setAmbulances] = useState();
    // const [ambulanceLength, setAmbulanceLength] = useState();



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
  
  return (
    <>
     <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Requests</Text>
          <Pressable ></Pressable>
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`px-5 mt-5 flex flex-col gap-5 mb-20`}>
        {requests.map((req)=> (
          <RequestCard {...req}/>
        ))}
        </View>
      </ScrollView> */}
      <View style={tw`mt-3 pb-36`}>
        <FlatList
          style={tw``}
          data={requests}
          renderItem={({item})=> (
            <View style={tw`px-5 mt-1 mb-4 `}>
              <RequestCard {...item}/>
            </View>
          )}
        />
      </View>
    </>
  )
}

export default RequestsScreen

const styles = StyleSheet.create({})