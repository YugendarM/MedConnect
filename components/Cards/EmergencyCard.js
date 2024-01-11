import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { useNavigation } from '@react-navigation/native'

const EmergencyCard = (props) => {
    const  navigation = useNavigation();
    console.log(props.requestForBlood.req);
  return (
    <View style={tw` bg-white rounded-2xl py-3.5 px-1 pl-2 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center gap-2`}>
            <View>
                <Image style={tw`h-17 w-17 rounded-full `} source={require("../../assets/profile.jpeg")} />
            </View>
            <View style={tw`flex flex-col gap-1 w-40`}>
                <Text style={tw` text-xl`}>{props.patientName}</Text>
                <View style={tw`flex flex-row items-center gap-1.5`}>
                    <Text style={tw`text-gray-400 text-xs`}>{props.address.city} </Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.gender}</Text>
                    
                </View>
                <View>
                {props.requestForBlood.req && <Text style={tw` text-gray-400 text-xs`}>Need: Blood</Text>}
                    {props.requestForFinancialSupport.req && <Text style={tw` text-gray-400 text-xs`}>Need: Financial Support</Text>}
                    {props.requestForMedicine.req && <Text style={tw` text-gray-400 text-xs`}>Need: Medicine</Text>}
                    {props.requestForMedicalSupply.req && <Text style={tw` text-gray-400 text-xs`}>Need: Medical Supply</Text>}
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            
                <TouchableOpacity onPress={() => navigation.navigate("RequestProfile", {...props})} style={tw`rounded-lg w-18 bg-medConnect-medBlue py-2 flex flex-row items-center justify-center`}>
                    <Text style={tw`text-white text-base font-semibold`}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default EmergencyCard

const styles = StyleSheet.create({})