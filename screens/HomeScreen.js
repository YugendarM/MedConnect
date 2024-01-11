import { StyleSheet, Text, View, Image,SafeAreaView, Pressable } from 'react-native'
// import tw from "twrnc";
import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


import tw from '../tailwind';
import { useDeviceContext } from 'twrnc';
import axios from 'axios';
import { ambulanceData, hospitalData } from '../components/Dataset/Dataset';

const HomeScreen = () => {
    const navigation = useNavigation();

    const [hospitals,setHospitals] = useState([]);
    const [ambulances, setAmbulances] = useState();
    const [ambulanceLength, setAmbulanceLength] = useState();
    const [hospitalLength, setHospitalLength] = useState();



  useEffect(() => {
    const fetchHospitals = async() => {
      try{
        const response = await axios.get("http://192.168.29.43:8000/hospitals");
        setHospitals(response.data.Hospital);
        setHospitalLength(response.data.Hospital.length);
      }catch(error){
        console.log("error:",error);
      }
    }
    
    const fetchAmbulance = async() => {
        try{
          const response = await axios.get("http://192.168.29.43:8000/ambulances");
          setAmbulances(response.data.Ambulance);
          setAmbulanceLength(response.data.Ambulance.length);
          
        }catch(error){
          console.log("error:",error);
        }
      }
    //   fetchHospitals();
    //   fetchAmbulance();

    setAmbulances(ambulanceData);
    setAmbulanceLength(ambulanceData.length);

    setHospitals(hospitalData);
    setHospitalLength(hospitalData.length);
  },[])
  console.log( "hospitals",hospitals);
  console.log( "ambulance",ambulances);

//   console.log(ambulances.length);

//   console.log(hospitals.length);
  var bedCount =0;
  hospitals.map((item) => {
    console.log(item.beds);
    bedCount += item.beds;
  })
  console.log("count",bedCount);

//   const ambCount = ambulances.length;
// var counta;
// ambulances.map((item) => (
//     counta = counta+1
// ))
// for( i=0;i<ambulances.length;i++){
//     counta= counta+1
// }
// console.log(counta);


    useDeviceContext(tw);
  return (
    <>
        <SafeAreaView>
            <View style={tw`relative`}>
                <View style={tw`absolute top-0 `}>
                    <Image source={require("../assets/homebg.png")} />
                </View>
                <View style={tw`flex flex-row justify-between mt-14 p-4`}>
                    <Text style={tw`text-white text-2xl `}>Hello, Yugendar</Text>
                    <View style={tw`flex flex-row gap-4`}>
                        {/* <Pressable><Feather name="search" size={32} color="white" /></Pressable> */}
                        <Pressable onPress={() => navigation.navigate("RequestResource")}><Ionicons name="add-circle-outline" size={32} color="white" /></Pressable>
                    </View>
                </View>
                <View style={tw`top-5 h-full  bg-white rounded-t-extra py-10 flex items-center gap-5`}>

                    <Pressable onPress={() => {
                        navigation.navigate("Beds")
                    }}>
                        <View style={tw`w-76 flex flex-row items-center justify-between px-5 py-5   shadow-xl bg-white rounded-xl`} >
                            <View style={tw`flex flex-row items-center gap-3`}>
                                <Ionicons name="bed" size={56} color="#4da8f6" />
                                <Text style={tw`text-lg shadow-offset-1`}>Beds</Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-center`}>
                                <Text style={tw`text-3xl`}>{bedCount?bedCount:"25"}</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Availabe Hospital Beds</Text>
                            </View>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => {
                        navigation.navigate("MenuAmbulance")
                    }}>
                    <View style={tw`w-76 flex flex-row items-center justify-between px-5 py-5 mx-10  shadow-xl bg-white rounded-xl`} >
                            <View style={tw`flex flex-row items-center gap-3`}>
                                <FontAwesome5 name="ambulance" size={40} color="#4da8f6" />
                                <Text style={tw`text-lg shadow-offset-1`}>Ambulance</Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-center`}>
                                <Text style={tw`text-3xl`}>{ambulanceLength? ambulanceLength: 12}</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Availabe Ambulance</Text>
                            </View>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => {
                        navigation.navigate("MenuHospitals")
                    }}>
                        <View style={tw`w-76 flex flex-row items-center justify-between px-5 py-5 mx-10  shadow-xl bg-white rounded-xl`} >
                            <View style={tw`flex flex-row items-center gap-3`}>
                            <FontAwesome5 name="hospital-user" size={40} color="#4da8f6" />
                                <Text style={tw`text-lg shadow-offset-1`}>Hospitals</Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-center`}>
                                <Text style={tw`text-3xl`}>{hospitalLength? hospitalLength: "11"}</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Availabe Hospital</Text>
                            </View>
                        </View>
                    </Pressable>

                    <View style={tw`flex flex-row bg-white shadow-md rounded-md justify-between mx-5 py-5 px-6 items-center`}>
                        <Text style={tw`font-semibold text-[15px] w-3/5`}>Few patients are in emergency. Look out to help them.</Text>
                        <Pressable onPress={()=> {navigation.navigate("Emergencies")}}>
                            <Text style={tw`bg-medBlue px-2 py-2 text-white rounded-md text-[16px]`}>Emergency</Text>
                        </Pressable>
                    </View>

                    <View>
                        <Text style={tw`text-gray-300 text-center w-76 mx-auto mt-5`}>Note: The counts listed above are approximations. Actual count may vary.</Text>
                    </View>

                </View>

                    
                </View>
        </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})