import { View, Text, Image, StyleSheet,Pressable, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'
import Post from "../Components/Post";
import posts from './/..//data/posts'

const ProfileScreen = () => {
const navigation = useNavigation()
    const goToLoginScreen = (event) => {
        navigation.navigate('Login')
    }

       return (
        <View style={styles.contaner}>
               <View style={styles.profileContainer}>
                  <Pressable onPress={goToLoginScreen} style={styles.buttonGoOut} hitSlop={{ left: 10, bottom: 10, top: 10, right: 10 }}>
                        <Feather name="log-out" size={24} color="#BDBDBD" />
                   </Pressable>
                   <View style={styles.avatarContainer}>
                       <Image style={styles.avatar} source={require('.//..//images/avatar.jpg')}/>
                        <Pressable onPress={()=>{console.log('delAvatar')}} style={styles.delAvatarButton}>
                            <AntDesign name="close" size={13} color="rgba(232, 232, 232, 1)" />
                        </Pressable>
                   </View>
                   <Text style={styles.posterName}>Natali Romanova</Text>
                    <FlatList showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={posts}
                        renderItem={({ item }) =>
                            <Post id={item.id} img={item.img} description={item.description} comments={item.comments} locationName={item.locationName} geolocation={item.geoLocation} likes={item.likes} />}
                                keyExtractor={(item) => item.id}
                    />
               </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        paddingTop: 148,
        paddingBottom: 100,
    },
    profileContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom:32,
    },
    buttonGoOut: {
        position: 'absolute',
        top: 22,
        right:16,
    },
    avatarContainer: {
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:32,
        position:'relative',
        width: 120,
        height: 120,
        marginTop: -60,
        backgroundColor: 'white',
        borderRadius:16
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius:16
    },
    delAvatarButton: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 82,
        left: 108,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'rgba(232, 232, 232, 1)',
        borderWidth:1,
    },
    posterName: {
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 500,
        color: 'rgba(33, 33, 33, 1)',
        marginBottom: 33,
        alignSelf:'center'
    }

})
export default ProfileScreen