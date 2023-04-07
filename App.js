import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/bgimage.jpg")}
        style={styles.image}
      >
        <View style={styles.bordertext}>
        <Text style={styles.text}>to start working on your app!</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>EMAIL ADDRES</Text>
            <TextInput
              // всередині записують пропси
            style={styles.input}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.label}>PASSWORD</Text>  
            <TextInput
              // всередині записують пропси
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
            />
          </View>
        </View>
      </ImageBackground>
      
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  //все лижить в контейнері image і центрується як в ньому задано
   image: {
    flex: 1,
     resizeMode: "cover",
     justifyContent: 'center',
   // alignItems: 'center',
  },
  form: {
    marginHorizontal: 10,
  },
  label:{
    marginBottom: 10,
  },
    input: {
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f0f8ff',
  },
  text: {
    color: "green",
    fontSize: 25,
  },
  bordertext:{
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 40,
    width: 300,
  }
});
