import React from 'react';
import { moduleNane } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"; //для создания скринов
import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
// const PostsScreen = ({ route }) => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         if (route.params) {
//             setPosts(prevState => [...prevState, route.params]);
//         }
//     }, [route.params]);

//     return(
//     <View style={styles.container}> 
//             <FlatList
//                 data={posts}
//                 keyExtractor={(item, indx) => indx.toString()}
//                 renderItem={({ item }) => (
//                     <View style={{marginBottom: 10, justifyContent: "center", alignItems: "center"}}>
//                         <Image source={{ uri: item.photo }}
//                             style={{ width: 350, height: 200 }} />
//                     </View>
//                 )}
//             />
//     </View >
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         //alignItems: "center",
//         paddingTop:40,
//     },
// });

// export default PostsScreen;