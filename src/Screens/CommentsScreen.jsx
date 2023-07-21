import { View, Text, SafeAreaView, Image, FlatList, StyleSheet, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useRoute } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'
 import { useState } from "react"
import Comment from "../Components/Comment"
const CommentsScreen = () => {
    const [textInput, setTextInput]=useState('')
    const {params:{comments, img}} = useRoute();
console.log(img)


    
    const addComment = (e) => {
        console.log(textInput)
    }

    return (
        <View style={styles.contaner}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={{uri:img}}/>
            </View>
            <SafeAreaView style={styles.commentsContainer}>
                <FlatList data={comments}
                    renderItem={({ item}) => <Comment author={item.author} text={item.text} date={item.date} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={setTextInput} style={styles.input} placeholder="Коментувати..." placeholderTextColor='rgba(189, 189, 189, 1)' value={textInput} multiline />
                    <Pressable onPress={addComment} style={styles.addCommentButton}>
                            <AntDesign name="arrowup" size={18} color="rgba(255, 255, 255, 1)" />
                    </Pressable>
                </View>
         </View>
    )
}

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom:15,
        backgroundColor:'white',
    },
    imageContainer: {
        width: 343,
        height: 240,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom:32,
        overflow:'hidden',
    },
    img: {
        height: '100%',
        width:'100%'
    },
    commentsContainer: {
        flex: 1,
    },
    inputContainer: {
        width: '100%',
        minHeight:50,
        height: 'auto',
        borderWidth: 1,
        borderColor: 'rgba(232, 232, 232, 1)',
        backgroundColor: 'rgba(246, 246, 246, 1)',
        borderRadius: 30,
        paddingLeft: 16,
        paddingRight: 8,
        marginTop: 15,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: 280,
        fontSize: 16,
        fontFamily:'Roboto',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'center',
    },
    addCommentButton: {
        width: 34,
        height: 34,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 108, 0, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    }

})

export default CommentsScreen