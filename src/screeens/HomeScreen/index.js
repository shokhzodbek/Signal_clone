import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import CustomList from '../../components/CustomList'


const HomeScreen = () => {
      return (
            <View>
                  <ScrollView>
                        <CustomList/>
                        </ScrollView>
                  
            </View>
      )
}

export default HomeScreen
