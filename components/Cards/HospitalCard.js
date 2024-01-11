import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'

const HospitalCard = (props) => {

  const navigation = useNavigation();
  return (
    <View style={tw` bg-white rounded-2xl py-3.5 px-1 pl-3 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center `}>
            
            <View style={tw`flex flex-col gap-2 `}>
                <Text style={tw` text-lg w-full`}>{props.name}</Text>
                <View style={tw`flex flex-row items-center gap-2`}>
                    <Text style={tw`text-gray-400 text-xs`}>{props.city} </Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.type} </Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.distance} km</Text>
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            
                <TouchableOpacity onPress={() => {navigation.navigate("HospitalProfile",{...props})}} style={tw`rounded-lg w-18 bg-medConnect-medBlue py-1.5 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-white text-lg font-semibold`}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default HospitalCard

const styles = StyleSheet.create({})