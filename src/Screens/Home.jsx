import { View, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutIcon from "../Components/LogOutIcon";
import UserIcon from "../Components/UserIcon";
import GridIcon from "../Components/GridIcon";
import ButtonNewPost from "../Components/ButtonNewPost";
import ArrowLeftIcon from "../Components/ArrowLeftIcon";



const Tabs = createBottomTabNavigator();

const Home = () => {
    return (
        <View style={styles.container}>
            <Tabs.Navigator screenOptions={styles.headerStyles} >
                <Tabs.Screen name='PostsScreen'
                    component={PostsScreen}
                    options={{
                        tabBarShowLabel: false, headerRight: LogOutIcon, title: 'Публікації',
                        tabBarIcon: ({ focused, color, size }) => (
                            <GridIcon name={focused ? 'isActive' : 'notActive'} size={size} color={color} />
                        )
                    }}/>
                <Tabs.Screen name='CreatePostsScreen'
                    component={CreatePostsScreen}
                    options={{
                        tabBarShowLabel: false, headerLeft: ArrowLeftIcon, title: 'Створити публікацію',
                        tabBarIcon: ({ focused, color, size }) => (
                            <ButtonNewPost name={focused ? 'isActive' : 'notActive'} size={size} color={color} />
                    ), tabBarVisible: false, tabBarStyle: { display: "none" },
                    }}/>
                <Tabs.Screen name='ProfileScreen'
                    component={ProfileScreen}
                    options={{tabBarShowLabel: false, headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => (
                            <UserIcon name={focused ? 'isActive' : 'notActive'} size={size} color={color} />
                    )
                    }}/>
            </Tabs.Navigator> 
       </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        // backgroundColor:'white'
    },   
    // свой общий объект стилей для хедера( а именно для контейнера навигации)
    headerStyles: {
        tabBarShowLabel: true,
        tabBarStyle: {
            backgroundColor:'white',
            paddingTop: 9,
            display: 'flex',
            alignItems: 'center',
        },
        // паддинги в хедере
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        // стилизация теста в хедере
        headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: 17,
            fontWeight: 500,
            lineHeight: 22,
            letterSpacing: 0.408,
        },
        // цвет текста в хедере
        headerTintColor: 'rgba(33, 33, 33, 1)',
        headerStyle: {
            // стилизация тени
            backgroundColor: '#FFFFFF',
              height: 100,
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowColor: '#212121CC',
              shadowOpacity: 0.3,
              shadowRadius: 1.84,
              elevation: 0,
        },
    },
    postScreenOptions: {
        headerRight: LogOutIcon,
        title: 'Публікації' 
    },
    createPostsScreenOptions: {
        headerLeft: ArrowLeftIcon,
        title: 'Створити публікацію'
    }
 })





// import React from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";



// const Home = () => {

//   const  Camera = {
//     center: {
//        latitude: 51.5001500,
//           longitude: 31.2948000,
//    },
//    pitch: 30,
//    heading: 30,

//    // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
//    altitude: 1,

//    // Only when using Google Maps.
//    zoom: 20
// }
//   return (
//     <View style={styles.container}>
//           <MapView
//         //       provider='google'
//               style={styles.mapStyle}
//               camera={Camera}
//         // region={{
//         //   latitude: 51.5001500,
//         //   longitude: 31.2948000,
//         //   latitudeDelta: 0.91,
//         //   longitudeDelta: 0.90,
//         //       }}
//               showsUserLocation={true}
//         //   rotateEnabled={false}
//             //   scrollEnabled={false}
//             // showsCompass={false}
//         mapType='hybrid'
//         minZoomLevel={5}
//         onMapReady={() => console.log("Map is ready")}
//             //   onRegionChange={() => {console.log("Region change") }, 2000)}
//       >
//         <Marker
//                   title="I am here"
//                   coordinate={{
//                       latitude: 51.5001500,
//                       longitude: 31.2948000,
//                   }}
//                   description='Hello'
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mapStyle: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

// export default Home;