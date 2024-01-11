import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'

const AmbulanceCard = (props) => {
  const navigation = useNavigation();
  return (
    <View style={tw` bg-white rounded-2xl py-3.5 px-3 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center `}>
            
            <View style={tw`flex flex-col gap-2 `}>
                <Text style={tw` text-lg w-full`}>{props.name}</Text>
                <View style={tw`flex flex-row items-center gap-3`}>
                    <Text style={tw`text-gray-400 text-xs`}>{props.city} </Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.time} mins</Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.distance} km</Text>
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            
                <TouchableOpacity onPress={() => navigation.navigate("AmbulanceProfile",{...props})} style={tw`rounded-lg w-20 bg-medConnect-medBlue py-2 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-white text-lg font-semibold`}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default AmbulanceCard

const styles = StyleSheet.create({})