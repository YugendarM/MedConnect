import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { Alert } from "react-native";

const SignupScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    // console.log(user);

    const user = {
      name: name,
      email: email,
      password: password,
    };
    // console.log(user);


    // send a POST  request to the backend API to register the user
    axios
      .post("http://192.168.29.43:8000/register", {name,email,password})
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully",
          [
            {
              text: 'OK',
              onPress: () => {
                // Navigate to the 'Next' screen
                navigation.navigate("Login");
              },
            },
          ],
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering",
          
        );
        console.log("registration failed", error);
      });
  };



  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={tw`relative h-full  flex justify-center items-center`}>
          <View style={tw`absolute top-0 `}>
            <Image source={require("../assets/homebg.png")} />
          </View>



          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            style={tw`absolute top-40 flex-1 flex-col gap-5 w-3/4 justify-center items-center `}
          >
            <View style={tw`flex flex-row justify-center`}>
                <Image source={require("../assets/logo.png")} style={tw`w-64`}/>
            </View>
            <View
              style={tw`flex-1 flex-row gap-3 items-center border border-white rounded-full py-3 px-5 w-76`}
            >
              <Ionicons name="person" size={24} color="white" />
              <TextInput
              value={name}
                style={tw`text-lg text-white placeholder:italic placeholder:text-blue-400 w-76`}
                placeholder="Enter Username"
                placeholderTextColor={"white"}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View
              style={tw`flex-1 flex-row gap-3 mt-5 items-center border border-white rounded-full py-3 px-5 w-76`}
            >
              <MaterialIcons name="email" size={24} color="white" />
              <TextInput
              value={email}
                style={tw`text-lg text-white placeholder:italic placeholder:text-blue-400 w-76`}
                placeholder="Enter your Email"
                placeholderTextColor={"white"}
                onChangeText={(text) => setEmail(text)}

              />
            </View>
            <View
              style={tw`flex-1 flex-row gap-3 mt-5 items-center border border-white rounded-full py-3 px-5 w-76`}
            >
              <FontAwesome name="lock" size={24} color="white" />
              <TextInput
              value={password}
                style={tw`text-lg text-white placeholder:italic placeholder:text-blue-400 w-76`}
                placeholder="Enter your Password"
                placeholderTextColor={"white"}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>

            <Pressable onPress={handleRegister} style={tw`flex flex-row justify-center mt-5`}>
              <Text
                style={tw`bg-white text-blue-400 px-8 text-xl py-2 w-35 text-center rounded-md`}
                
              >
                SignUp
              </Text>
            </Pressable>

            <View style={tw`flex flex-row justify-center mt-3`}>
            <Pressable
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={tw`text-white`}>Already have an Account. <Text style={tw`font-bold`}>Login</Text></Text>
            </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});


