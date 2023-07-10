import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

const CreateScreen = ({navigation}) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();
        setPhoto(photo.uri);
     // console.log("location", location);
   };
    
    const sendPhoto = async () => {
        navigation.navigate("DefaultScreen", {photo});
    }
    useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

    })();
  }, []);
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>
                 {photo && ( 
                    <View style={styles.photoContainer}>
                        <Image
                            source={{ uri: photo }}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                )} 
                <TouchableOpacity style={styles.snapContainer} onPress={takePhoto} >
                    <Text style={styles.snapText}>SNAP</Text>
                </TouchableOpacity>
            </Camera>
            <View>
                 <TouchableOpacity style={styles.sendContainer} onPress={sendPhoto} >
                    <Text style={styles.sendLabel}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        //flex:1,
        height: "70%",
        marginHorizontal: 2,
        borderRadius: 10,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    snapContainer: {
        borderWidth: 1,
        borderColor: "#fff",
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
         marginBottom: 20,
    },
    snapText: {
        color: "#fff",
    },
    photoContainer: {
        position: "absolute",
        top: 50,
        left: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10,       
        
    },
    sendContainer: {
        marginHorizontal: 30,
        height: 40,
        borderWidth: 2,
        borderColor: "#000",
        //width: 70,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
         marginTop: 20,
    },
    sendLabel: {
        color: "#000",
        fontSize: 20,
    }

});

export default CreateScreen;