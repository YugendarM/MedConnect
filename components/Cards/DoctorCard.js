import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'

const DoctorCard = (props) => {
    const navigation = useNavigation();
  return (
    <View  style={tw` bg-white rounded-2xl py-3.5 px-1 pl-2 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center gap-2`}>
            <View>
                {/* <Image style={tw`h-17 w-17 rounded-full `} source={require("../../assets/profile.jpeg")} /> */}
                <Image style={tw`h-17 w-17 rounded-full `} source={{uri:props?.image}} />
            </View>
            <View style={tw`flex flex-col gap-2 w-40`}>
                <Text style={tw` text-xl`}>{props.name}</Text>
                <View style={tw`flex flex-row items-center gap-3`}>
                    <Text style={tw`text-gray-400 text-xs`}>{props.qualification.join(" ")}</Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.specialization[0]}</Text>
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            
                <TouchableOpacity onPress={ () => {navigation.navigate("DoctorProfile", {...props})} } style={tw`rounded-lg w-18 bg-medConnect-medBlue py-2.5 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-white text-base font-semibold`}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default DoctorCard

const styles = StyleSheet.create({})