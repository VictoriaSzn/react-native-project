import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';

const PostsScreen = ({ route }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (route.params) {
            setPosts(prevState => [...prevState, route.params]);
        }
    }, [route.params]);

    return(
    <View style={styles.container}> 
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({ item }) => (
                    <View style={{marginBottom: 10, justifyContent: "center", alignItems: "center"}}>
                        <Image source={{ uri: item.photo }}
                            style={{ width: 350, height: 200 }} />
                    </View>
                )}
            />
    </View >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        paddingTop:40,
    },
});

export default PostsScreen;