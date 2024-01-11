import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import tw from '../../tailwind';
import { Ionicons } from '@expo/vector-icons';


const MapButton = ({ latitude, longitude, label,iconStyle, textStyle, style }) => {
  const handleMapPress = () => {
    Linking.openURL(`geo:${latitude},${longitude}?q=${latitude},${longitude}(${label})`);
  };

  return (
    <View >
      <TouchableOpacity style={tw`${style}`} onPress={handleMapPress}>
        
            <Ionicons style={tw`${iconStyle}`} name="location" size={30} color="black" />
            <Text style={tw`${textStyle}`}>Take me there</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default MapButton;