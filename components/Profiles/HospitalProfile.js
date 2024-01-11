import { StyleSheet, Text, View,Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import tw from '../../tailwind';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Hyperlink from 'react-native-hyperlink'
import call from 'react-native-phone-call'
import MapButton from '../FunctionalElements/MapButton';
import DialerButton from '../FunctionalElements/DialerButton';
import ExternalLinkButton from '../FunctionalElements/ExternalLinkButton';
import WhatsAppButton from '../FunctionalElements/WhatsappButton';





const HospitalProfile = () => {

  const route = useRoute();
  const data = route.params;
  const navigation = useNavigation();

  const facilities = ["aksjdflfk", "aksjdflfk", "alksjdfdflj", "aksjdflfk","aksjdflfk","aksjdflfk","aksjdflfk","aksjdflfk","aksjdflfk",];
  const treatments = ["a;sksdjfj;", "aksjdflfk", "alksjdfdflj","aksjdflfk","aksjdflfk","aksjdflfk","aksjdflfk",];

  
  return (
    <>

      <View style={tw`h-full mb-40`}>
        <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
            <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
            {/* <Text style={tw`text-2xl font-bold`}>Beds</Text> */}
            {/* <Pressable ><Ionicons name="search" size={32} color="black" /></Pressable> */}
        </View>

        
        
        <ScrollView  style={tw` h-full `}>
            {
              1 && (
                <View style={tw`mt-6 `}>
                {/* <Image style={tw`h-80`} source={{uri:data.image}}/> */}
              </View>
              )
            }

          <View style={tw`px-3 flex flex-col gap-5 mt-8`}>
              <View style={tw`flex flex-row justify-between items-center  `}>
                <View style={tw`flex flex-col gap-1`}>
                  <Text style={tw`text-2xl`}>{data.name}</Text>
                  <View style={tw`flex flex-row items-center gap-10`}>
                    <Text style={tw`text-gray-500`}>{data.city}</Text>
                    <Text style={tw`text-gray-500`}>13 km</Text>
                  </View>
                </View>
                <View style={tw`flex flex-row items-center bg-medBlue p-2 rounded-lg`}>
                  <Text style={tw`text-lg text-white `}>{data.rating}</Text>
                  <FontAwesome name="star" size={24} color="white" />
                </View>
              </View>

            <View style={tw`text-xl flex flex-col gap-3`}>
              <Text style={tw`text-xl`}>Facilities</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex flex-row  gap-5`}>
                {data.facilities.map((facility) => (
                  <Text style={tw`bg-medBlue mr-3 text-white rounded-full px-3 py-1 text-lg font-medium `}>{facility}</Text>
                ))}
              </ScrollView>
            </View>

            <View style={tw`text-xl flex flex-col gap-3`}>
              <Text style={tw`text-xl flex flex-col gap-8`}>Treatments</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex flex-row  gap-3 `}>
              {data.treatments && data.treatments.map((treatment) => (
                  <Text style={tw`bg-medBlue mr-3 text-white rounded-full px-3 py-1 text-lg font-medium `}>{treatment}</Text>
                  ))}
              </ScrollView>
            </View>

            <View style={tw`border-4 border-medBlue bg-medBlue bg-opacity-30 px-5 py-3 rounded-full flex flex-row items-center justify-between`}>
              <Text style={tw`text-2xl`}>Doctors</Text>
              <Text style={tw`text-3xl font-bold`}>{data.doctors}</Text>
            </View>

            <View style={tw` px-5 py-3 bg-medBlue bg-opacity-30 rounded-extra flex flex-row items-center justify-between`}>
              <Text style={tw`text-2xl`}>Beds</Text>
              <Text style={tw`text-3xl font-bold`}>{data.beds}</Text>
            </View>

            {
              data.certifications && (
                <View style={tw`text-2xl flex flex-row gap-3 justify-between px-3`}>
                  <Text style={tw`text-lg w-70`}>{ data.certifications && data.certifications.join(", ")}</Text>
                  <MaterialIcons name="verified-user" size={24} color="green" />
                </View>
              )
            }

            {
              data.visitingHours && (
                <View>
                  <Text style={tw`text-gray-500 text-lg`}>Visiting hours: </Text>
                  <Text style={tw`text-lg`}>{data.visitingHours}</Text>
                </View>
              )
            }

            <View>
              <Text style={tw`text-gray-500 text-lg`}>{data.address}</Text>
            </View>
            

            {
              data.certifications && (
                <Pressable style={tw` flex flex-row items-center justify-end`}>
                    {/* <Text style={tw`text-white bg-medBlue rounded-md px-3 py-2 text-xl font-bold`}>Make Appointment</Text> */}
                    <View style={tw` flex flex-row justify-center items-center`}>
                      <WhatsAppButton style = "bg-medBlue rounded-lg px-3 py-2 text-white font-semibold text-xl mx-10" name = "Make Appointment" phoneNumber={data.phoneNo} />
                  </View>
                </Pressable>
              )
            }

            

            </View>

            <View style={tw`bg-medBlue px-3 py-5 mt-16`}>
              <Text style={tw`text-2xl text-white font-bold mb-5`}>Contact:</Text>
              <View style={tw`flex flex-col gap-3 `}>
              <View style={tw`flex flex-col gap-3`}>
                  

                  <DialerButton textStyle="text-lg text-medBlue px-2 py-1 font-medium" style="rounded-md bg-white flex flex-row gap-2 items-center px-3 py-2" iconStyle="text-medBlue text-2xl px-1" phoneNumber={data.phoneNo} />   

                    
                  <Hyperlink linkDefault={ true } style={tw`rounded-md bg-white flex flex-row gap-2 items-center px-3 py-2`}>
                    <MaterialCommunityIcons style={tw`text-medBlue`} name="email" size={32} />
                    <Text style={tw` w-full text-medBlue text-lg px-2 py-1 font-medium ` }>
                    {data.email}
                    </Text>
                  </Hyperlink>

                  <Hyperlink linkDefault={ true } style={tw`rounded-md bg-white flex flex-row gap-2 items-center px-3 py-2`}>
                    <MaterialCommunityIcons style={tw`text-medBlue`} name="web" size={32} />
                    <Text style={tw` w-full text-medBlue text-lg px-2 py-1 font-medium ` }>
                    {data.website}
                    </Text>
                  </Hyperlink>

                  {/* <ExternalLinkButton url="example.com" /> */}

                 

                  <MapButton style="bg-white rounded-md px-3 py-2 flex flex-row gap-2 items-center" textStyle="w-full text-medBlue text-lg px-2 py-1 font-medium" iconStyle="text-medBlue" latitude={data.location.lat} longitude={data.location.lon} label={data.name} />


                </View>
              </View>

           
            </View>

        </ScrollView>
      </View>
    </>
  )
}

export default HospitalProfile

const styles = StyleSheet.create({})