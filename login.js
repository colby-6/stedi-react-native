import {StyleSheet, View, Text, Button} from 'react-native';
import React, { useState } from 'react';

export default function Login(props)

{const Login = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phoneNumber}
      />
      <Button title="Send Text" onPress={()=>sendSms(phoneNumber)}></Button>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={oneTimePassword}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> 
      <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
    </SafeAreaView>
  );
};


const sendSms = (phoneNumber) => {
    fetch('https://dev.stedi.me/twofactorlogin'+ phoneNumber, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
}
const verifyOtp = (phoneNumber, oneTimePassword) => {
  fetch('https://dev.stedi.me/twofactorlogin', {
method: 'POST',
headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  phoneNumber,
  oneTimePassword,
})
});
}


const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})
}