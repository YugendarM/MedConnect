import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    const user = {
      email:email,
      password:password
    }

    axios.post("http://192.168.29.43:8000/login", user)
    .then((response) => {
      console.log(response);
      const token = response.data.token;
      // // AsyncStorage .setItem("authToken", token);
      navigation.replace("Main")
    }).catch((error) => {
      Alert.alert("Login Error", "Invalid Email or password");
      console.log(error);
    })
  };
  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={tw`relative h-full  flex justify-center items-center`}>
            <View style={tw`absolute top-0 `}>
              <Image source={require("../assets/homebg.png")} />
            </View>


            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'} 
              style={tw`absolute top-52 flex-1 flex-col gap-3 w-3/4 justify-center items-center `}>
                <View style={tw`flex flex-row justify-center`}>
                    <Image source={require("../assets/logo.png")} style={tw`w-64`}/>
                </View>
              <View
                style={tw`flex-1 flex-row gap-3 items-center border border-white rounded-full py-3 px-5 w-76 `}
              >
                <MaterialIcons name="email" size={24} color="white" />
                <TextInput
                value={email}
                  style={tw`text-lg text-white placeholder:italic placeholder:text-blue-400 w-76`}
                  placeholder="Enter your Email"
                  placeholderTextColor={'white'}
                  onChangeText={(text) => {setEmail(text)}}
                />
              </View>
              <View
                style={tw`flex-1 flex-row gap-3 mt-5 items-center border border-white rounded-full py-3 px-5 w-76`}
              >
                <FontAwesome name="lock" size={24} color="white" />
                <TextInput
                value={password}
                  style={tw`text-lg text-white placeholder:italic placeholder:text-blue-400 w-76`}
                  secureTextEntry
                  placeholder="Enter your Password"
                  placeholderTextColor={"white"}
                  onChangeText={(text) => {setPassword(text)}}
                />
              </View>
              <View style={tw`flex flex-row justify-center`}>
              <Pressable style={tw`flex flex-row justify-center`} 
              onPress={() => {navigation.navigate("Main")}}
              // onPress={handleLogin}
              >
                <Text
                  style={tw`bg-white mt-5 text-blue-400 px-8 text-center text-xl w-35 py-2 rounded-md`}
                  
                >
                  Login
                </Text>
              </Pressable>
              </View>

              <View style={tw`flex flex-row justify-center mt-3`}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                <Text style={tw`text-white`}>
                  Don't have an Account. <Text style={tw`font-bold`}>Create Account</Text>
                </Text>
              </Pressable>
              </View>


              {/* <Pressable onPress={() => {
                navigation.navigate("RequestProfile")
              }}>
                <Text>RequestProfile</Text>
              </Pressable>

              <Pressable onPress={() => {
                navigation.navigate("MedicineProfile")
              }}>
                <Text>MedicineProfile</Text>
              </Pressable>
              
              <Pressable onPress={() => {
                navigation.navigate("HospitalProfile")
              }}>
                <Text>HospitalProfile</Text>
              </Pressable>

              <Pressable onPress={() => {
                navigation.navigate("DoctorProfile")
              }}>
                <Text>DoctorProfile</Text>
              </Pressable>

              <Pressable onPress={() => {
                navigation.navigate("AmbulanceProfile")
              }}>
                <Text>AmbulanceProfile</Text>
              </Pressable>

              <Pressable onPress={() => {
                navigation.navigate("BloodProfile")
              }}>
                <Text>BloodProfile</Text>
              </Pressable> */}

              

              
              
              

            </KeyboardAvoidingView>

           
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
