import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const ExternalLinkButton = ({ url }) => {
  const handleLinkPress = () => {
    // Use Linking to open the specified URL in the default browser
    Linking.openURL(url);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text>{url}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExternalLinkButton;
