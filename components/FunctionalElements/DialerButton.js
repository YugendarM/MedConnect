import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import tw from '../../tailwind';
import { FontAwesome5 } from '@expo/vector-icons';


const DialerButton = ({ phoneNumber, style, textStyle, iconStyle }) => {
  const handleDialPress = () => {
    // Use Linking to open the phone dialer with the specified number
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View>
      <TouchableOpacity style={tw`${style}`} onPress={handleDialPress}>
        <FontAwesome5 style={tw`${iconStyle}`} name="phone-alt" size={22} color="white" />
        <Text style={tw`${textStyle}`}>+91 {phoneNumber}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DialerButton;
