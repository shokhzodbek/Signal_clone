import React from 'react'
import { View, Text } from 'react-native'
import {Avatar,ListItem} from 'react-native-elements'
const CustomList = () => {
      return (
             <ListItem>
                   <Avatar
                   rounded
                   source={{
                         uri:"#"
                   }}
                   />

                   <ListItem.Content>
                         <ListItem.Title>
                     Youtbe Chat
                         </ListItem.Title>
                         <ListItem.Subtitle numberOfLines={2} ellipsizeMode="tail">
                               subtitle
                         </ListItem.Subtitle>
                   </ListItem.Content>
             </ListItem>
      )
}

export default CustomList
