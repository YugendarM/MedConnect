import { StyleSheet, Text, View, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind';
import { useNavigation } from '@react-navigation/native';



const RequestCard = (props) => {
    const navigation = useNavigation();
  return (
    <View style={tw` bg-white rounded-2xl py-3.5 px-1 pl-2 shadow-lg`}>
        <View style={tw`flex flex-row items-center justify-between `}>
            <View style={tw`flex flex-row items-center gap-2`}>
            <View>
                <Image style={tw`h-17 w-17 rounded-full `} source={require("../../assets/profile.jpeg")} />
            </View>
            <View style={tw`flex flex-col gap-2 w-40`}>
                <Text style={tw` text-xl`}>{props.patientName}</Text>
                <View style={tw`flex flex-row items-center gap-3`}>
                    <Text style={tw`text-gray-400 text-xs`}>Age: {props.age} years</Text>
                    <Text style={tw`text-gray-400 text-xs`}>{props.gender}</Text>
                    {/* <Text style={tw`text-gray-400 text-xs`}>{props.distance} km</Text> */}
                </View>
            </View>
            </View>
            <View style={tw`w-20`}>
            {/* <Button
            Style={tw`rounded-lg w-20`}
                // onPress={}
                title="Blood"
                color="#4DA8F6"
                accessibilityLabel="props blood"
                /> */}
                <TouchableOpacity onPress ={() => navigation.navigate("RequestProfile", {...props})} style={tw`rounded-lg w-18 bg-medConnect-medBlue py-2.5 flex flex-row items-center justify-center`}>
                    {props.requestForBlood.req && <Text style={tw`text-white font-semibold`}>Blood</Text>}
                    {props.requestForFinancialSupport.req && <Text style={tw`text-white font-semibold`}>Finance</Text>}
                    {props.requestForMedicine.req && <Text style={tw`text-white font-semibold`}>Medicine</Text>}
                    {props.requestForMedicalSupply.req && <Text style={tw`text-white font-semibold`}>MedSupply</Text>}
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default RequestCard

const styles = StyleSheet.create({})