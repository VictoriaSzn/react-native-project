import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import {
  Button, ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity,
  Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from 'react-native';

const initialState = {
  login: '',
  email: '',
  password:''
}

const loadAplication = async () => {
   await Font.loadAsync({
     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
 };

export default function App() {
 /* const [fontsLoaded] = useFonts({
     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
}*/
   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
   const [state, setState] = useState(initialState);
   const KeyboardHide = () => {
     setIsShowKeyboard(false);
     Keyboard.dismiss();
     setState(initialState);
   }
   return (
    <View style={styles.container}>
       <TouchableWithoutFeedback
         //</View>
         onPress={KeyboardHide}
       >
      <ImageBackground
        source={require("./assets/images/bgimage.jpg")}
       // style={{ ...styles.image, marginBottom: isShowKeyboard ? 0 : 0}}
        style={styles.image}
      >
{/* FORM */}
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
           >
          <View
            style={styles.form}
           // style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
          {/* <View style={styles.bordertext}></View> */}
           <Text style={styles.text} >Реєстрація</Text>
                  
{/* LOGIN */}
          <View>
            {/* <Text style={styles.label}>LOGIN</Text>   */}
            <TextInput
              // всередині записують пропси
            placeholder="Логін"      
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
            value ={state.login}
            onChangeText={(value)=>setState((prevState)=>({...prevState, login:value}))}              
              //textAlign={"center"}  
            // keyboardType="numeric"
            />
          </View>
 {/* MAIL */}
          <View>
            {/* <Text style={styles.label}>EMAIL ADDRES</Text> */}
            <TextInput
              // всередині записують пропси
              placeholder="Електронна пошта"    
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              value ={state.email}
              onChangeText={(value)=>setState((prevState)=>({...prevState, email:value}))}
              //textAlign={"center"}              
            />
          </View>
 {/* password */}
          <View>
            {/* <Text style={styles.label}>PASSWORD</Text>   */}
            <TextInput
              // всередині записують пропси
              style={styles.input}
              secureTextEntry={true}
              placeholder="Пароль"
              onFocus={() => setIsShowKeyboard(true)}
              value={state.password}
              onChangeText={(value)=>setState((prevState)=>({...prevState, password:value}))}
            />
               </View>
 {/* BUTTON */}
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={KeyboardHide}>
            <Text style={styles.btnTitle}>Зареєструватись</Text>
            </TouchableOpacity>
            
          <Text style={styles.textDn}>Вже маєте акаунт? Увійти.</Text>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      </TouchableWithoutFeedback>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//занимает всю ширину єкрана
    backgroundColor: '#fff',
    //alignItems: 'center',
   // justifyContent: 'center',
    
  },
  //все лижить в контейнері image і центрується як в ньому задано
   image: {
    flex: 1, //занимает всю ширину єкрана и наклад на флекс контейнера слоем
     resizeMode: "cover",
     //justifyContent: 'center',//////
     justifyContent: 'flex-end',
   // justifyContent: 'space-around'////
  },
  form: {
    //marginHorizontal: 10,
     backgroundColor: '#ffffff',
     borderColor: "black",
    borderRadius: 10,
    paddingBottom:78,
    // marginBottom:0,
    
  },
  //label:{
  //marginBottom: 10,
  //},

    text: {
    fontWeight: 500,
    textAlign: 'center', 
      fontSize: 30,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    marginBottom: 32,  
    
  },
  input: {
    height: 50,
    margin: 16,
    marginTop: 0,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: '#f6f6f6',
    fontSize:16,
  },

    bordertext:{
     borderWidth: 2,
     borderColor: "black",
     borderRadius: 16,
      padding: 40,
      width: 120,
      height: 120,
     alignItems: 'center'
   },
  btn:{
    backgroundColor: '#ff6c00', 
    height: 50,
    borderRadius: 100,
    margin: 16,
    marginTop:43, ////////перекриття
    justifyContent: "center",
    alignItems: "center",
    
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
