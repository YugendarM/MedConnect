import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import tw from "../../tailwind";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native";
import { Alert } from "react-native";

const RequestResource = () => {
  const navigation = useNavigation();
 
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" },
  ];

  const requestFor = [
    { label: "Blood", value: "Blood" },
    { label: "Financial Support", value: "Financial Support" },
    { label: "Medicine", value: "Medicine" },
    { label: "Meidcal Supply", value: "Meidcal Supply" },
  ];

  const handlesubmit = () => {
    Alert.alert("Request Successfull", "Request added successfully")
  }



  return (
    <>
      <View style={tw`flex bg-white flex-row justify-between px-5 mt-16 `}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={32} color="black" />
        </Pressable>
        <Text style={tw`text-2xl font-bold text-center`}>Request Resource</Text>
        <View></View>
      </View>
      <ScrollView>
      <View style={tw`flex flex-col pb-10 bg-white items-center gap-3 pt-10 px-5`}>
        <TextInput
          // value={}
          style={tw`text-base placeholder:italic rounded-md placeholder:text-blue-400 w-full border-2 border-medBlue  p-2`}
          placeholder="Requester Name"
          placeholderTextColor={"gray"}
          //   onChangeText={(text) => {setEmail(text)}}
        />
        <TextInput
          // value={}
          style={tw`text-base placeholder:italic rounded-md placeholder:text-blue-400 w-full border-2 border-medBlue  p-2`}
          placeholder="Patient Name"
          placeholderTextColor={"gray"}
          //   onChangeText={(text) => {setEmail(text)}}
        />
        <View style={tw`flex ml-2 flex-row justify-between gap-2 `}>
          <TextInput
            // value={}
            style={tw`  text-base placeholder:italic w-1/2 ml-40 rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
            // maxLength={40}
            placeholder="Age"
            placeholderTextColor={"gray"}
            keyboardType="numeric"
            //   onChangeText={(text) => {setEmail(text)}}
          />
         
          <DropDownPicker style= {tw`w-1/2`}
          placeholder="Gender"
          placeholderStyle= {{color:"#909090", fontSize:16}}
            items={gender}
            open={isOpen}
            setValue={(val) => setCurrentValue(val)}
            value={currentValue}
            setOpen={() => setIsOpen(!isOpen)}
          />
        </View>
        <TextInput
            // value={}
            style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
            // maxLength={40}
            placeholder="Email"
            placeholderTextColor={"gray"}
            keyboardType="email"
            //   onChangeText={(text) => {setEmail(text)}}
          />
          <Text style={tw`text-base text-gray-400 flex flex-row justify-start`}>Residential Details..</Text>
          <View style= {tw`flex flex-row items-center gap-2`}>
            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-1/2 rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Door Number"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-1/2 rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Street"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              //   onChangeText={(text) => {setEmail(text)}}
            />  
          </View>
          <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Land Mark"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            />  
            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="City"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            />  
            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Postal Code"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              //   onChangeText={(text) => {setEmail(text)}}
            />  

            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Phone Number"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

          <Text style={tw`text-base text-gray-400 flex flex-row justify-start`}>Hospital Details..</Text>
          <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Hospital Name"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Address"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

            <TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Email Address"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

          <DropDownPicker 
          placeholder="Request for"
          placeholderStyle= {{color:"#909090", fontSize:16}}
            items={requestFor}
            open={isOpen}
            setValue={(val) => setCurrentValue(val)}
            value={currentValue}
            setOpen={() => setIsOpen(!isOpen)}
          />

<TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Blood Group"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

<TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Cost of treatment"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

<TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="UPI Id"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

<TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Medicine if required"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

<TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Medical Supply if required"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 

<TextInput
              // value={}
              style={tw`  text-base placeholder:italic w-full rounded-md placeholder:text-blue-400 border-2 border-medBlue  p-2`}
              // maxLength={40}
              placeholder="Other Details"
              placeholderTextColor={"gray"}
              //   onChangeText={(text) => {setEmail(text)}}
            /> 


            <View style = {tw`flex flex-row gap-5`}>
              <Pressable style= {tw`border-2 w-24  border-medBlue rounded-md px-4 py-1`}><Text style={tw`text-lg text-center text-medBlue`}>Clear</Text></Pressable>
              <Pressable style={tw`w-24 bg-medBlue  rounded-md px-4 py-1`}><Text style={tw`text-lg text-center text-white`} onPress={handlesubmit}>Submit</Text></Pressable>

            </View>

      </View>
      </ScrollView>
    </>
  );
};

export default RequestResource;

const styles = StyleSheet.create({
  button: {
    fontSize: "20px",
    borderColor: "black",
    backgroundColor: "black",
  },
});
