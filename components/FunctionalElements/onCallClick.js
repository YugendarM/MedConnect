import call from 'react-native-phone-call'


const args = {
    number: "9854145876", // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
  }

  const onCallClick = () => {
    call(args).catch(console.error);
  }

  export default onCallClick