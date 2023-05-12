import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity,
  Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from 'react-native';

const initialState = {
  login: '',
  email: '',
  password:''
}
export default function App() {
  //console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
   const KeyboardHide = () => {
     setIsShowKeyboard(false);
     Keyboard.dismiss();
     setState(initialState);
     //console.log(state);
   }
  
  return (
    <TouchableWithoutFeedback onPress={KeyboardHide}>
    <View style={styles.container}>
      <ImageBackground
         style={styles.image} 
         source={require("./assets/images/bgimage.jpg")}
       >
         <KeyboardAvoidingView
          //behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
         >
           <View style={{
             ...styles.form,
             marginBottom: isShowKeyboard ? 10 : 0
           }}>
         <Text style={styles.titleForm} >Реєстрація</Text>
          <TextInput
            placeholder="Логін"      
             style={{ ...styles.input, marginBottom: 16 }}
           onFocus={() => setIsShowKeyboard(true)}
            value ={state.login}
            onChangeText={(value)=>setState((prevState)=>({...prevState, login:value}))}              
          />
          <TextInput
             placeholder="Електронна пошта"    
             style={{ ...styles.input, marginBottom: 16 }}
              onFocus={() => setIsShowKeyboard(true)}
              value ={state.email}
              onChangeText={(value)=>setState((prevState)=>({...prevState, email:value}))}
          />
         <TextInput
             style={{ ...styles.input, marginBottom: 43 }}
              secureTextEntry={true}
              placeholder="Пароль"
              onFocus={() => setIsShowKeyboard(true)}
              value={state.password}
              onChangeText={(value)=>setState((prevState)=>({...prevState, password:value}))}
              />
              {/* показати на паролі
           <TouchableOpacity style={styles.btn}><Text style={styles.btnTitle}>Показати</Text></TouchableOpacity> */}
           <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
             onPress={KeyboardHide}
           >
             <Text style={styles.btnTitle}>Зареєструватись</Text>
           </TouchableOpacity>
            <Text style={styles.textDn}>Вже маєте акаунт? Увійти.</Text>
           </View>
           </KeyboardAvoidingView>
      </ImageBackground>
     </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
  },
  image: {
    flex: 1,
     resizeMode: "cover",
     //justifyContent: 'center',//////
     //justifyContent: 'flex-end',
    //justifyContent: 'space-around'////
    
  },
   form: {
    backgroundColor: '#ffffff',
    borderColor: "black",
    borderRadius: 10,
    paddingTop:92,
    paddingBottom:78,
    paddingHorizontal: 16,
  },
    titleForm: {
    fontWeight: 500,
    textAlign: 'center', 
    fontSize: 30,
    //fontFamily: 'Roboto-Medium',
    color: '#212121',
    marginBottom: 32
  },
    input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: '#f6f6f6',
    fontSize:16,
  },
    btn:{
    backgroundColor: '#ff6c00', 
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
      alignItems: "center",
    marginBottom:16,
  },
    btnTitle: {
    color: "#ffffff",
    fontSize:16,
  },
     textDn: {
     fontWeight: 400,
     fontSize: 16,
     justifyContent:'center',
     color: '#1b4371',
     textAlign: 'center', //////?????
  },
});
