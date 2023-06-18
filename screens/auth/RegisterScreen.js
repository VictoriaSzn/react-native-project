import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback, useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity,
  Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const initialState = {
  login: '',
  email: '',
  password: ''
};

export default function RegisterScreen({navigation}) {
  //console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
 
 const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => { 
    const onChange = () => {
      const width = Dimensions.get('window').width;
      //console.log("width", width);
      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
        
  }, []);
  
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
         source={require("../../assets/images/bgimage.jpg")}
       >
         <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
         >
           <View style={{
             ...styles.form,
              marginBottom: isShowKeyboard ? 10 : 1,
              // paddingBottom: isShowKeyboard ? 5 : 60,
              width: dimensions,
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
            placeholder="Адреса електронної пошти"    
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
            <TouchableOpacity onPress={()=>navigation.navigate("Login")} >
                              <Text style={styles.textDn}>Вже маєте акаунт?
                              <Text style={styles.textNav}> Увійти.</Text>
                                  </Text>
            </TouchableOpacity>
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
    // justifyContent: 'center',//////
     //justifyContent: 'flex-end',
    justifyContent: 'space-around',////
    //alignItems: 'center',//для dimensions
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
    fontFamily: 'Kablammo',
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
     textNav: {
     fontWeight: 400,
     fontSize: 16,
     justifyContent:'center',
     color: '#1b4371',
         textAlign: 'center', //////?????
     //fontFamily:"Roboto-Regular",//
  },
});
