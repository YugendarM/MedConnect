import { StyleSheet, Text, View, Image,TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native'

const BedCard = (props) => {

  
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("HospitalProfile", {...props})} style={tw` bg-white rounded-2xl py-3.5 px-2 pl-5 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center `}>
                <View style={tw`flex flex-col gap-2 `}>
                    <Text style={tw` text-lg w-full`}>{props.name}</Text>
                    <View style={tw`flex flex-row items-center gap-3`}>
                        <Text style={tw`text-gray-400 text-xs`}>{props.city} </Text>
                        <Text style={tw`text-gray-400 text-xs`}>{props.type}</Text>
                        {/* <Text style={tw`text-gray-400 text-xs`}>{props.distance} km</Text> */}
                    </View>
                </View>
            </View>
            <View style={tw`w-20`}>
            
                    <Text style={tw` text-3xl`}>{props.beds}</Text>
                    <Text style={tw`text-lg text-gray-400`}>Beds</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default BedCard

const styles = StyleSheet.create({})