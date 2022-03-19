import React from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { useState } from "react";
const Login = (props) => {
  const [Phone, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Phone}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
       <Button
        title="Send OTP"
        // disabled
        onPress={() => fetch('https://dev.stedi.me/twofactorlogin/' + Phone, {method: 'post'} )}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='One time Code'
        keyboardType='numeric'
      />
     <Button
        title='Login'
        // disabled
        onPress={() => {fetch ('https://dev.stedi.me/twofactorlogin', {method:'post',
        body: JSON.stringify({
                    'phoneNumber': Phone,
                    'oneTimePassword': number})})
                    .then((response) =>{
                      if(response.status == 200){
                        props.setUserLoggedIn(true)
                      }
                      else{Alert.alert('Invalid login')}
                    })
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;




// import {StyleSheet, View, Text, Button} from 'react-native';
// import React, { useState } from 'react';

//  const Login= (props)=>{
//   const [phoneNumber, setPhoneNumber] = React.useState("Enter Phone Number:");
//   const [oneTimePassword, set_otp] = React.useState(null);
//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         placeHolder="Phone Number"
//         onChangeText={setPhoneNumber}
//         value={phoneNumber}
//         keyboardType='numeric' />
//       <Button title="Send Text" onPress={() => sendSms(phoneNumber)}></Button>
//       <TextInput
//         style={styles.input}
//         onChangeText={set_otp}
//         value={oneTimePassword}
//         placeholder="One Time Passord"
//         keyboardType="numeric" />
//       <Button title="Send SMS" onPress={() => {

//         fetch('https://dev.stedi.me/twofactorlogin' + phoneNumber, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//           }
//         });
//       } }>


//       </Button>
//     </SafeAreaView>
//   );
// }


// const sendSms = (phoneNumber) => {
//     fetch('https://dev.stedi.me/twofactorlogin'+ phoneNumber, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
// });
// }
// const verifyOtp = (phoneNumber, oneTimePassword) => {
//   fetch('https://dev.stedi.me/twofactorlogin', {
// method: 'POST',
// headers: {
//   Accept: 'application/json',
//   'Content-Type': 'application/json'
// },
// body: JSON.stringify({
//   phoneNumber,
//   oneTimePassword,
// })
// });
// }


// const styles = StyleSheet.create({
//     login: {
//         flexDirection: 'row',
//         width: '100%',
//         justifyContent: 'space-between',
//         backgroundColor: 'green',
//         height: '12%',
//         alignItems: 'flex-end',
//         paddingBottom: 5,
//         paddingLeft: 10,
//         paddingRight: 10,
        
//       },
// })
// export default Login;