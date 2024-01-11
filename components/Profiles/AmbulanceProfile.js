import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import tw from '../../tailwind';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DialerButton from '../FunctionalElements/DialerButton';
import WhatsAppButton from '../FunctionalElements/WhatsappButton';
import Hyperlink from 'react-native-hyperlink';
import MapButton from '../FunctionalElements/MapButton';
import { useRoute } from '@react-navigation/native';

const AmbulanceProfile = () => {
    const route = useRoute();
    const data = route.params;
    const navigation = useNavigation();
  return (
    <>
        <View>
            <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
                <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
            </View>

            <View style={tw`px-5 flex flex-col gap-5`}>
            <View style={tw` flex flex-row justify-between mt-10 items-center`}>
                <View>
                    <Text style={tw`text-2xl font-semibold`}>{data.name}</Text> 
                    <View style={tw`flex flex-row gap-3 items-center`}>
                      <Text style={tw`text-lg text-gray-500`}>Distance: </Text>
                      <Text style={tw`text-lg font-semibold`}>7 km</Text>
                    </View>
                </View>
                {
                    data.verified && (
                        <View style={tw``}>
                            <MaterialIcons name="verified" size={32} color="green" />
                        </View>
                    )
                }
            </View>
            

            <View style={tw`flex flex-col gap-3`}>
                <Text style={tw`text-xl font-semibold`}>Details:</Text>
                <View>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Name: </Text>
                        <Text style={tw`text-xl font-semibold w-3/5`}>{data.providerName}</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-gray-500 w-2/5`}>Address: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>{data.address}</Text>
                    </View>

                </View>
            </View>

            <View>
                <View style={tw`flex flex-col gap-3 px-5 mt-5`}>
                            
                            <DialerButton textStyle="text-xl px-2 text-white  font-semibold" style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" iconStyle="text-white" phoneNumber={data.phoneNO} />   


                            <Hyperlink linkDefault={ true } style={tw`bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3`}>
                                <MaterialIcons name="email" size={30} color="white" />
                                <Text style={tw` text-xl  text-white  font-semibold` }>
                                {data.email}
                                </Text>
                            </Hyperlink>

                            <MapButton style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" textStyle="text-xl  text-white  font-semibold" iconStyle="text-white" latitude={data.location.lat} longitude={data.location.lon} label={data.name} />

                        </View>
                </View>


                <View>
                    <View style={tw` flex flex-row justify-center items-center mt-3`}>
                        <WhatsAppButton style = "bg-medBlue rounded-lg px-3 py-2 text-white font-semibold text-xl mx-10" name = "Connect" phoneNumber={data.phoneNO} />
                    </View>
                </View>
            </View>
        </View>
    </>
  )
}

export default AmbulanceProfile

const styles = StyleSheet.create({})