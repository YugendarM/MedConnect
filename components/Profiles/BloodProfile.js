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

const MedicineProfile = () => {
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
            <View style={tw` flex flex-col  mt-10 `}>
                <View style={tw`flex flex-row`}>
                    <Text style={tw`text-2xl text-gray-500 w-3/5`}>Blood Group:</Text> 
                    <Text style={tw`text-2xl font-semibold w-2/5`}>{data.bloodGrp}</Text>
                </View>

                <View style={tw`flex flex-row`}>
                    <Text style={tw`text-2xl text-gray-500 w-3/5`}>Unit: </Text>
                    <Text style={tw`text-2xl font-semibold w-2/5`}>{data.unit} Units</Text>
                </View>
                
            </View>
            

            <View style={tw`flex flex-col gap-3`}>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-xl font-semibold`}>Donor Details:</Text>
                    {/* <Text style={tw`text-xl font-semibold`}>Blood Bank Details:</Text> */}
                    {
                        data.verified && (
                            <View style={tw``}>
                                <MaterialIcons name="verified" size={32} color="green" />
                            </View>
                        )
                    }
                </View>
                <View style={tw`flex flex-col gap-2`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Name: </Text>
                        <Text style={tw`text-xl font-semibold w-3/5`}>{data.provider.name}</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Age: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>{data.provider.age} Years</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Gender: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>{data.provider.gender} Years</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Address: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>{data.provider.address.doorNo}, {data.provider.address.street}, {data.provider.address.landmark}, {data.provider.address.city},{data.provider.address.postalCode}</Text>
                    </View>

                    <View style={tw`flex flex-row`}>
                        <Text style={tw`text-xl text-gray-500 w-2/5`}>Distance: </Text>
                        <Text style={tw`text-lg font-semibold w-3/5`}>{data.distance} km</Text>
                    </View>

                </View>
            </View>

            <View>
                <View style={tw`flex flex-col gap-3 px-5 mt-5`}>
                            
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
        </View>
    </>
  )
}

export default MedicineProfile

const styles = StyleSheet.create({})