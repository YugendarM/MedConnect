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
import { ScrollView } from 'react-native';

const MedicineProfile = () => {
    const route = useRoute();
    const data = route.params;
    const navigation = useNavigation();
  return (
    <>
        <ScrollView>
            <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
                <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
            </View>

            <View style={tw`px-5 flex flex-col gap-5`}>
            <View style={tw` flex flex-row justify-between mt-10 items-center`}>
                <View>
                    <Text style={tw`text-2xl font-semibold`}>{data.name}</Text> 
                    {data.dose && <Text style={tw`text-lg text-gray-500`}>Dose: {data.dose}mg</Text>}
                    {/* <Text style={tw`text-lg text-gray-500`}>Brand: Fzier</Text> */}
                </View>
                {
                    data.verified && (
                        <View style={tw``}>
                            <MaterialIcons name="verified" size={32} color="green" />
                        </View>
                    )
                }
            </View>
            {data.brand && (
                <View style={tw`flex flex-row`}>
                    <Text style={tw`text-xl text-gray-500 w-1/2`}>Brand: </Text>
                    <Text style={tw`text-xl font-semibold w-1/2`}>{data.brand}</Text>
                </View>
            )}

            {data.purpose && (
                <View style={tw`flex flex-row`}>
                    <Text style={tw`text-xl text-gray-500 w-1/2`}>Purpose: </Text>
                    <Text style={tw`text-xl font-semibold w-1/2`}>{data.purpose}</Text>
                </View>
            )}

            <View style={tw`flex flex-col gap-3`}>
                <Text style={tw`text-xl font-semibold`}>Provider Details:</Text>
                <View style={tw`flex flex-col gap-2  `}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Name: </Text>
                        <Text style={tw`text-xl font-semibold w-3/5`}>{data.provider.name}</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-gray-500 w-2/5`}>Distance: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>3 km</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-lg text-gray-500 w-2/5`}>Address: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>{data.provider.address.doorNo},{data.provider.address.street},{data.provider.address.landmark},{data.provider.address.city} {data.provider.address.postalCode}</Text>
                    </View>

                    

                </View>
            </View>

            <View>
                <View style={tw`flex flex-col gap-3 px-5 mt-5`}>
                            
                            {/* <View style={tw`flex flex-row w-full  rounded-lg  items-center`}>
                                <FontAwesome5 style={tw`bg-medBlue rounded-l-lg px-3.5 py-3`} name="phone-alt" size={19} color="white" />
                                <DialerButton style="text-xl w-59 items-stretch justify-stretch bg-medBlue rounded-r-lg px-2 py-2 text-white font-semibold" phoneNumber="9841477404" />   
                            </View> */}
                    <DialerButton textStyle="text-xl px-2 text-white  font-semibold" style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" iconStyle="text-white" phoneNumber={data.provider.phoneNo} />   


                            <Hyperlink linkDefault={ true } style={tw`bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3`}>
                                <MaterialIcons name="email" size={30} color="white" />
                                <Text style={tw` text-xl  text-white  font-semibold` }>
                                {data.provider.email}
                                </Text>
                            </Hyperlink>

                            <MapButton style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" textStyle="text-xl  text-white  font-semibold" iconStyle="text-white" latitude={data.location.lat} longitude={data.location.lon} label={data.provider.name} />

                        </View>
                </View>


                <View>
                    <View style={tw` flex flex-row justify-center items-center mt-3`}>
                        <WhatsAppButton style = "bg-medBlue rounded-lg px-3 py-2 text-white font-semibold text-xl mx-10" name = "Connect" phoneNumber={data.provider.phoneNo} />
                    </View>
                </View>
            </View>
        </ScrollView>
    </>
  )
}

export default MedicineProfile

const styles = StyleSheet.create({})