import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DialerButton from '../FunctionalElements/DialerButton';
import Hyperlink from 'react-native-hyperlink';
import { MaterialIcons } from '@expo/vector-icons';
import WhatsAppButton from '../FunctionalElements/WhatsappButton';
import { useNavigation, useRoute } from '@react-navigation/native';


const DoctorProfile = () => {

  const navigation = useNavigation();

  const route = useRoute();

  const data = route.params;
  return (
    <>
    <View>
        <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
            <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
        </View>

        <View style={tw`px-5 mt-6`}>
          <View style={tw`flex flex-row items-center gap-4`}>
            <Image style={tw`h-36 w-36 rounded-full`} source={{uri:data.image}}/>
            <View>
              <Text style={tw`text-2xl font-semibold`}>{data.name}</Text>
              <View>
                <Text style={tw`text-lg text-gray-500`}>{data.gender}</Text>
              </View>
            </View>
          </View>

          <View style={tw`flex flex-col gap-3 mt-10`}>
          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-xl text-gray-500 w-1/2`}>Age:</Text>
            <Text style={tw`text-xl font-semibold w-1/2`}>{data.age} Years</Text>
          </View>

          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-xl text-gray-500 w-1/2`}>Qualification:</Text>
            <Text style={tw`text-xl font-semibold w-1/2`}>{data.qualification.join(" ")}</Text>
          </View>

          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-xl text-gray-500 w-1/2`}>Hospital:</Text>
            <Text style={tw`text-xl font-semibold w-1/2`}>{data.hospital}</Text>
          </View>

          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-xl text-gray-500 w-1/2`}>specialization:</Text>
            <Text style={tw`text-xl font-semibold w-1/2`}>{data.specialization}</Text>
          </View>

          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`text-xl text-gray-500 w-1/2`}>Experience:</Text>
            <Text style={tw`text-xl font-semibold w-1/2`}>{data.experience} Years</Text>
          </View>
          </View>

          <View>
          <View style={tw`flex flex-col gap-3 px-5 mt-5`}>
                    
                    <DialerButton textStyle="text-xl px-2 text-white  font-semibold" style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" iconStyle="text-white" phoneNumber={data.phoneNo} />   


                    <Hyperlink linkDefault={ true } style={tw`bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3`}>
                    <MaterialIcons name="email" size={30} color="white" />
                    <Text style={tw` text-xl  text-white  font-semibold` }>
                    {data.email}
                    </Text>
                  </Hyperlink>
                </View>
          </View>


          <View>
              <View style={tw` flex flex-row justify-center items-center mt-5`}>
                  <WhatsAppButton style = "bg-medBlue rounded-lg px-3 py-2 text-white font-semibold text-xl mx-10" name = "Connect" phoneNumber={data.phoneNo} />
              </View>
          </View>
        </View>
    </View>
    </>
  )
}

export default DoctorProfile

const styles = StyleSheet.create({})