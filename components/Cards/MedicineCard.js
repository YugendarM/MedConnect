import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'

const MedicineCard = (props) => {
  const navigation = useNavigation();
  return (
    <View style={tw` bg-white rounded-2xl py-3.5 px-1 pl-3 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center `}>
            
            <View style={tw`flex flex-col gap-2 `}>
                <Text style={tw` text-lg w-full`}>{props.name}</Text>
                <View style={tw`flex flex-row items-center gap-2`}>
                    {props.dose && <Text style={tw`text-gray-400 text-xs`}>Dose: {props.dose} </Text>}
                    {props.purpose && <Text style={tw`text-gray-400 text-xs`}>Purpose: {props.purpose} </Text>}
                    {props.unit && <Text style={tw`text-gray-400 text-xs`}>Unit: {props.unit} </Text>}
                    {props.brand && <Text style={tw`text-gray-400 text-xs`}>brand: {props.brand} </Text>}
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            
                <TouchableOpacity onPress={() => navigation.navigate("MedicineProfile",{...props})} style={tw`rounded-lg w-18 bg-medConnect-medBlue py-1.5 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-white text-lg font-semibold`}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default MedicineCard

const styles = StyleSheet.create({})