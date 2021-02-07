import React,{useEffect, useState} from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import {Input,Button,Image} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase'
const LoginScreen = () => {
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const navigation = useNavigation()
      useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
               if(userAuth) {
                     navigation.replace("Home")
               }
         })
         return unsubscribe;

         
      },[])

      const signIn = ()=>{}
      return (
            <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
                 <Image
                 style={styles.image}
                  source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"}}/>
                 <View style={styles.inputContainer}>
                       <Input
                       placeholder="Email"
                       type="email"
                       value={email}
                       autoFocus
                       onChangeText={(e)=>setEmail(e)}
                       />
                       <Input
                       placeholder="Password"
                       type="password"
                       value={password}
                       secureTextEntry
                       onChangeText={(e)=>setPassword(e)}
                       />
                 </View>
                 <Button containerStyle={styles.button} title="Login"/>
                 <Button 
                 containerStyle={styles.button} 
                 title="Register" type="outline"
                 onPress={()=>navigation.navigate('Reg')}
                 />
            </KeyboardAvoidingView>
      )
}

export default LoginScreen
