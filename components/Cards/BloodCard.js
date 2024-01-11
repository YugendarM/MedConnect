import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'

const BloodCard = (props) => {
    const navigation = useNavigation();
  return (
    <View style={tw` bg-white rounded-2xl py-3.5 px-1 pl-2 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center gap-2`}>
            <View>
                <Image style={tw`h-17 w-17 rounded-full `} source={props.provider.image? {uri:props.provider.image}: require("../../assets/profile.jpeg") } />
            </View>
            <View style={tw`flex flex-col gap-2 w-40`}>
                <Text style={tw` text-xl`}>{props.provider.name}</Text>
                <View style={tw`flex flex-row items-center gap-3`}>
                    <Text style={tw`text-gray-400 text-xs`}>Age: {props.provider.age} years</Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.provider.gender}</Text>
                    {props.dist && <Text style={tw`text-gray-400 text-xs`}>{props.dist} km</Text>}
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            
                <TouchableOpacity onPress={() => {navigation.navigate("BloodProfile",{...props})}} style={tw`rounded-lg w-18 bg-medConnect-medBlue py-2.5 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-white text-base font-semibold`}>{props.bloodGrp}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default BloodCard

const styles = StyleSheet.create({})