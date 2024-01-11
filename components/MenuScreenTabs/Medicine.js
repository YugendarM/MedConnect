import { ScrollView, StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MedicineCard from '../Cards/MedicineCard';
import axios from "axios";
import { medicineData } from '../Dataset/Dataset';

const Medicine = () => {

  const navigation = useNavigation();

  

  const [medicines,setMedicines] = useState([]);
  useEffect(() => {
    const fetchMedicine = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/medicine");
        setMedicines(response.data.Medicine);
        
      }catch(error){
        console.log("error:",error);
      }
    }
    // fetchMedicine();
    setMedicines(medicineData)
  },[])
  console.log( "medicine",medicines);


  return (

    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Medicine</Text>
          <Pressable ></Pressable>
      </View>
      <View style={tw`mt-5 mb-24`}>
      <ScrollView>
      <View style={tw`px-5 flex flex-col gap-5`}>
      {medicines.map((medi)=>(
        <MedicineCard {...medi}/>
      ))}
      
    </View>
      </ScrollView>
    </View>
    </>
    
  )
}

export default Medicine

const styles = StyleSheet.create({})