import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header(props) {
    console.log('header',props)
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{props.back?props.nav.goBack():null}}>
            <Icon name={props.back?"ios-arrow-back":"ios-menu"} size={30} color="#666" />
            </TouchableOpacity>
           <View style={{flexDirection:'row', position:'absolute', right:15}}>
           <Icon name={props.search?"ios-search":"ios-notifications-outline"} size={24} color="#666" />
           <Icon name={props.search?"ios-notifications-outline":"ios-funnel"} size={24} color="#666" style={{paddingLeft:20}}/>
           </View>
        </View>
    )

   
}

const styles = StyleSheet.create({
    header:{
        marginHorizontal: 10, 
        paddingHorizontal: 15, 
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 50, 
    }
})