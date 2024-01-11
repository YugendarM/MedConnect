import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BloodCard from '../Cards/BloodCard';
import axios from "axios";
import { bloodData } from '../Dataset/Dataset';


const Blood = () => {

  const navigation = useNavigation();

  

    const [blood,setBlood] = useState([]);
    useEffect(() => {
      const fetchBloods = async() => {
        try{
          const response = await axios.get("http://192.168.29.43:8000/blood");
          setBlood(response.data.Blood);
          
        }catch(error){
          console.log("error:",error);
        }
      }
      // fetchBloods();
      setBlood(bloodData);
    },[])
    console.log( "blood",blood);

  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Blood</Text>
          <View ></View>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {blood.map((bld)=>(
        <BloodCard {...bld}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={blood}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <BloodCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default Blood

const styles = StyleSheet.create({})