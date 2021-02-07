import React, { useLayoutEffect, useState } from 'react'
import { View, Text,KeyboardAvoidingView, Keyboard } from 'react-native'
import './styles'
import styles from './styles'
import {Button,Input} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase'
const RegisterScreen = () => {
     const navigation = useNavigation()
      const [name,setName] = useState('')
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [imageUrl,setImageUrl] = useState('')

      useLayoutEffect(()=>{
            navigation.setOptions({
            
            })
      },[navigation])
      const register =()=>{
       auth.createUserWithEmailAndPassword(email,password)
       .then(userAuth=>{
           userAuth.user.updateProfile({
                 displayName: name,
                 photoURL:imageUrl, 
                 
           })
       }).catch(error=>alert(error))
      }
      return (
          

           <KeyboardAvoidingView 
           behavior='padding' 
           style={styles.container}
           >
            <Text style={styles.text}>Create a signal account</Text>

               <View style={styles.inputContainer}>
                 <Input
                 placeholder="Full name"
                 type="text"
                 autoFocus
                 value={name}
                 onChangeText={e=>setName(e)}
                 />
                   <Input
                 placeholder="Email"
                 type="email"
                 value={email}
                 onChangeText={e=>setEmail(e)}
                 />
                   <Input
                 placeholder="Password"
                 type="password"
                 autoFocus
                 value={password}
                 secureTextEntry
                 onChangeText={e=>setPassword(e)}
                 />
                   <Input
                 placeholder="ImageUrl"
                 type="text"
                 autoFocus
                 value={imageUrl}
                 onChangeText={e=>setImageUrl(e)}
                 onSubmitEditing={register}
                 />
               </View>
               <Button
               onPress={register}
               title="Register"
               raised
               containerStyle={styles.button}
               />
           </KeyboardAvoidingView>)
           
}

export default RegisterScreen
