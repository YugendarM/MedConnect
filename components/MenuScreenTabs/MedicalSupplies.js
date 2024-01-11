import { ScrollView, StyleSheet, Text, View,Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MedicineCard from '../Cards/MedicineCard';
import axios from "axios";
import { medicalsupplyData } from '../Dataset/Dataset';


const MedicalSupplies = () => {

  const navigation = useNavigation();



  const [medicalSupplies,setMedicalSupplies] = useState([]);

  useEffect(() => {
    const fetchMedicalSupply = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/medicalsupply");
        setMedicalSupplies(response.data.MedicalSupply);
        console.log("response",response.data);
        
      }catch(error){
        console.log("error:",error);
      }
    }
    // fetchMedicalSupply();
    setMedicalSupplies(medicalsupplyData)
  },[])
  console.log( "medicalsupply",medicalSupplies);

  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Medical Supplies</Text>
          <Pressable ></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      {/* <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {medicalSupplies.map((medi)=>(
        <MedicineCard {...medi}/>
      ))}
      
    </View>
      </ScrollView> */}

      <FlatList
        style={tw``}
        data={medicalSupplies}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1 mb-4 `}>
            <MedicineCard {...item}/>
          </View>
        )}
      />
    </View>
    </>
    
  )
}

export default MedicalSupplies

const styles = StyleSheet.create({})