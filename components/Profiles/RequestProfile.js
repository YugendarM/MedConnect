import { StyleSheet, Text, View,Pressable,Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../tailwind'
import { Ionicons } from '@expo/vector-icons'; 
import WhatsAppButton from '../FunctionalElements/WhatsappButton';
import DialerButton from '../FunctionalElements/DialerButton';
import Hyperlink from 'react-native-hyperlink';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import MapButton from '../FunctionalElements/MapButton';
import { useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';


const RequestProfile = () => {

const navigation = useNavigation();    
const route = useRoute();
const data = route.params;


const openUpiApp = (upiId) => {
    const url = `upi://pay?pa=${upiId}`;
    
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.warn("UPI app is not installed on the device.");
      }
    }).catch((error) => console.error("Error opening UPI app:", error));
  };


  
    const handlePress = () => {
        openUpiApp(data.upiId);
  };


  return (
    <>
        <View>
            <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
                <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
            </View>


            <ScrollView showsVerticalScrollIndicator={false} style={tw` h-full `}>
            <View style={tw`flex flex-col `}>
                <ScrollView verical style={tw`mb-40`}>


                <View style={tw`relative flex flex-col items-center gap-3 px-8`}>
                    <Image style={tw`h-32 w-32 rounded-full`} source={require("../../assets/profile.jpeg")}/>
                    <View style={tw`absolute top-2 right-16`}>
                        <MaterialIcons name="verified" size={32} color="green" />
                    </View>
                    <View style={tw`flex flex-col items-center`}>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`text-xl text-gray-500`}>Requestor Name: </Text>
                            <Text style={tw`text-xl font-semibold`}>{data.requesterName}</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`text-xl text-gray-500`}>Contact:  </Text>
                            <DialerButton textStyle="text-medBlue underline text-xl font-semibold"  iconStyle="hidden" phoneNumber={data.phoneNo} />
                        </View>

                        {
                            data.emergency && (
                                <View style = {tw`flex flex-row items-center  text-base text-white  font-semibold  rounded-md mt-6 bg-red-400 px-3 py-2`}>
                                    <Text style={tw`text-white font-semibold text-base`}>Emergency </Text>
                                    <Ionicons name="alert-circle" size={24} color="white" />
                                </View>
                            )
                        }
                        
                    </View>
                </View>

                <View style={tw`px-5 mt-10 flex flex-col gap-3`}>
                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-xl text-gray-500 w-1/2`}>Patient Name: </Text>
                        <Text style={tw`text-xl font-semibold w-1/2`}>{data.patientName}</Text>
                    </View>
                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-gray-500 text-lg w-1/2`}>Age:</Text>
                        <Text style={tw`text-xl font-semibold w-1/2`}>{data.age} years</Text>
                    </View>
                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-gray-500 text-lg w-1/2`}>Gender:</Text>
                        <Text style={tw`text-xl font-semibold w-1/2`}>{data.gender}</Text>
                    </View>

                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-gray-500 text-lg w-1/2`}>Cause:</Text>
                        <Text style={tw`text-xl font-semibold w-1/2`}>{data.problem}</Text>
                    </View>

                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-gray-500 text-lg w-1/2`}>Need:</Text>
                        {data.requestForBlood.req && <Text style={tw`text-xl font-semibold w-1/2`}>Blood {data.requestForBlood.unit} Units</Text>}
                        {data.requestForFinancialSupport.req && <Text style={tw`text-xl font-semibold w-1/2`}>Financial Support</Text>}
                        {data.requestForMedicine.req && <Text style={tw`text-xl font-semibold w-1/2`}>Medicine {data.requestForMedicine.name} Dose:{data.requestForMedicine.dose}</Text>}
                        {data.requestForMedicalSupply.req && <Text style={tw`text-xl font-semibold w-1/2`}>Medical Supply {data.requestForMedicalSupply.name} {data.requestForMedicalSupply.unit} Units </Text>}
                    </View>

                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-gray-500 text-lg w-1/2`}>Cost of Treatment:</Text>
                        <Text style={tw`text-xl font-semibold w-1/2`}>{data.requestForFinancialSupport.req? data.requestForFinancialSupport.costOfTreatment : "Not mentioned"}</Text>
                    </View>
                </View>

                <View style={tw`flex flex-col gap-3 px-5 mt-5 items-stretch`}>

                    {/* <Hyperlink linkDefault={ true } style={tw`rounded-md bg-medBlue flex flex-row  items-center px-3 py-2`}>
                        <Image style={tw`w-15 h-8`} source={{uri:"https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"}}/>
                        <Text style={tw` w-full text-white text-lg px-2 py-1 font-medium ` }>
                        yugendar2411@okhdfcbank
                        </Text>
                    </Hyperlink> */}

                    {
                        data.upiId && (
                            <TouchableOpacity onPress={handlePress} style={tw`bg-medBlue rounded-lg py-2 flex flex-row  items-center px-3`}>
                                <Image style={tw`w-15 h-8`} source={{uri:"https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"}}/>
                                <Text style={tw` text-xl  text-white  font-semibold` }>
                                    {data.upiId}
                                </Text>
                            </TouchableOpacity>
                        )
                    }

                    
                    
                    
                    <DialerButton textStyle="text-xl px-2 text-white  font-semibold" style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" iconStyle="text-white" phoneNumber={data.phoneNo} />   
                    

                    <Hyperlink linkDefault={ true } style={tw`bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3`}>
                    <MaterialIcons name="email" size={30} color="white" />
                    <Text style={tw` text-xl  text-white  font-semibold` }>
                    {data.email}
                    </Text>
                  </Hyperlink>

                  <MapButton style="bg-medBlue rounded-lg py-2 flex flex-row gap-3 items-center px-3" textStyle="text-xl  text-white  font-semibold" iconStyle="text-white" latitude={data.location.lat} longitude={data.location.lon} label={data.requesterName} />

                </View>

                <View style={tw`flex flex-row px-5 mt-5`}>
                    <Text style={tw`text-base text-gray-500 w-1/2`}>Patient Address: </Text>
                    <Text style={tw`font-semibold text-base max-w-64 w-1/2`}>No:39, Srinivasa Nagar, Poonamallee, Chennai 600056</Text>
                </View>

                <View style={tw`flex flex-row px-5 mt-3`}>
                    <Text style={tw`text-base text-gray-500 w-1/2`}>Hospital Name: </Text>
                    <Text style={tw`font-semibold text-base max-w-64 w-1/2`}>{data.hospital.name}</Text>
                </View>

                <View style={tw`flex flex-row px-5 mt-3`}>
                    <Text style={tw`text-base text-gray-500 w-1/2`}>Distance: </Text>
                    <Text style={tw`font-semibold text-base max-w-64 w-1/2`}>7 km</Text>
                </View>

                <View style={tw`flex flex-row px-5 mt-3`}>
                    <Text style={tw`text-base text-gray-500 w-1/2`}>Posted at: </Text>
                    <Text style={tw`font-semibold text-base max-w-64 w-1/2`}>10th November 2023</Text>
                </View>

                <View style={tw` flex flex-row justify-center items-center mt-5`}>
                    <WhatsAppButton style = "bg-medBlue rounded-lg px-3 py-2 text-white font-semibold text-lg mx-10" name = "Connect" phoneNumber={data.phoneNo} />
                </View>
                </ScrollView>
            </View>

            
            
            </ScrollView>

            
        </View>
    </>
  )
}

export default RequestProfile

const styles = StyleSheet.create({})