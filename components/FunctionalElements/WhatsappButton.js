import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import tw from '../../tailwind';

const WhatsAppButton = ({ phoneNumber, name, style }) => {
  const openWhatsApp = () => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappUrl);
        } else {
          console.error("WhatsApp is not installed on the device");
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View>
      <TouchableOpacity onPress={openWhatsApp}>
        <Text style={tw`${style}`}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WhatsAppButton;
