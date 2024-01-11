import { StyleSheet, Text, View,Pressable,Image, Modal, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from '../tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../components/FunctionalElements/UserType';
import axios from "axios";

const ProfileScreen = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  // const handleUpdate = () =>{
  //   return (
  //     <>
  //       <Modal
  //       animationType="slide"
  //       transparent={true}
  //       visible={modalVisible}
  //       onRequestClose={() => {
  //         Alert.alert('Modal has been closed.');
  //         setModalVisible(!modalVisible);
  //       }}>
  //       <View style={styles.centeredView}>
  //         <View style={styles.modalView}>
  //           <Text style={styles.modalText}>Hello World!</Text>
  //           <Pressable
  //             style={[styles.button, styles.buttonClose]}
  //             onPress={() => setModalVisible(!modalVisible)}>
  //             <Text style={styles.textStyle}>Hide Modal</Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </Modal>
  //     </>
  //   );
  // }

  // const [userId, setUserId] = useContext(UserType);
  

  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://192.168.29.43:8000/profile/${"655cb0c5d67f2f7c5ca52509"}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);
  console.log(user);



  const navigation = useNavigation();
  return (
    <>
      <View style={tw`flex flex-row justify-between px-5 mt-16 `}>
          <Pressable onPress={()=>{navigation.goBack()}}><Ionicons name="arrow-back" size={32} color="black" /></Pressable>
          <Text style={tw`text-2xl font-bold`}>Profile</Text>
          <Pressable ></Pressable>
      </View>
      <View style={tw`px-5 flex flex-col items-center justify-center mt-10`}>
        <View style={tw`flex flex-row items-center gap-5`}>
          <Image style={tw`w-30 h-30 rounded-full`} source={require("../assets/profile.jpeg")}/>
          <View style={tw`flex flex-col items-start`}>
            <Text style={tw`text-2xl`}>Yugendar</Text>
            <Text style={tw`text-base text-gray-400`}>yugendar2411@gmail.com</Text>
          </View>
        </View>
        {/* <View style={tw`flex flex-row flex-wrap justify-between rounded-lg gap-3 w-full mt-6 `}>
          <Pressable style={tw`bg-medConnect-medBlue flex flex-row items-center py-2 justify-center rounded-lg bg-opacity-90 w-40`}><Text style={tw`text-xl font-medium text-white `}>Your Requests</Text></Pressable>
          <Pressable style={tw`bg-medConnect-medBlue flex flex-row items-center py-2 justify-center rounded-lg bg-opacity-90 w-40`}><Text style={tw`text-xl font-medium text-white `}>Your Resources</Text></Pressable>
        </View> */}

        <View style={tw`flex flex-row flex-wrap justify-center rounded-lg gap-3 w-full mt-6 `}>
          <Pressable onPress={() => navigation.navigate("Login")} style={tw`bg-medConnect-medBlue flex flex-row items-center py-2 justify-center rounded-lg bg-opacity-90 w-40`}><Text style={tw`text-xl font-medium text-white `}>Logout</Text></Pressable>
          {/* <Pressable style={tw`bg-medConnect-medBlue flex flex-row items-center py-2 justify-center rounded-lg bg-opacity-90 w-40`}><Text style={tw`text-xl font-medium text-white `}>Your Resources</Text></Pressable> */}
        </View>

        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Hello! I am a modal!</Text>
            <Button title="Close Modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal> */}
      </View>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})