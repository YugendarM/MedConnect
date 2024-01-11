import { Pressable, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from '../tailwind';
import { useDeviceContext } from 'twrnc';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const MenuScreen = () => {

  const navigation = useNavigation();

  const arr = [
    {name: "Blood", icon: <Fontisto name="blood-drop" size={32} color="red" />, key:1, navigate:"MenuBlood"},
    {name: "Medicine", icon: <MaterialCommunityIcons name="pill" size={32} color="blue" />, key:2, navigate:"MenuMedicine"},
    {name: "Ambulance", icon: <FontAwesome name="ambulance" size={32} color="green" />, key:3, navigate:"MenuAmbulance"},
    {name: "Doctors", icon: <Fontisto name="doctor" size={32} color="purple" />, key:4, navigate:"MenuDoctors"},
    {name: "Health Centers", icon: <FontAwesome name="heartbeat" size={32} color="pink" />, key:5, navigate:"MenuHealthCenters"},
    {name: "Hospitals", icon: <FontAwesome5 name="hospital-user" size={32} color="brown" />, key:6, navigate:"MenuHospitals"},
    {name: "Medical Supplies", icon: <FontAwesome5 name="briefcase-medical" size={32} color="orange" />, key:7, navigate:"MenuMedicalSupplies"},
    ]
  useDeviceContext(tw);
  return (

      <View style={tw`bg-white `}>

        <View style={tw`flex flex-row justify-between px-5 mt-16`}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Menu</Text>
          <Pressable ></Pressable>
        </View>

        <View style={tw`flex flex-col gap-3 mt-5 px-5 mb-40 pb-40`}>
          <Text style={tw`text-xl `}>Search For Resources...</Text>

          {/* <ScrollView  style={tw`mb-46`} showsVerticalScrollIndicator={false}>
            <View style={tw`mx-3 pb-40`}>
            {arr.map((item) => (
              <Pressable onPress={() => {navigation.navigate(item.navigate)}} style={tw`flex flex-row justify-between items-center px-5 py-6 shadow-lg rounded-xl bg-white my-3 `}>
               <Text style={tw`text-2xl`}>{item.name}</Text>
               {item.icon}
             </Pressable>
            ))}
            </View>
          </ScrollView> */}


        <FlatList
        style={tw` `}
        data={arr}
        renderItem={({item})=> (
          <View style={tw`px-5 mt-1  `}>
            {/* <HospitalCard {...item}/> */}
            <Pressable onPress={() => {navigation.navigate(item.navigate)}} style={tw`flex flex-row justify-between items-center px-5 py-6 shadow-lg rounded-xl bg-white my-3 `}>
               <Text style={tw`text-2xl`}>{item.name}</Text>
               {item.icon}
             </Pressable>
          </View>
        )}
      />
        </View>

      </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})