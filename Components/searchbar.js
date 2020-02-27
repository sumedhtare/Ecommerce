import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Search(props) {
    return (
        <View style={styles.searchbox}>
            <Icon name="ios-search" size={24} color="#666" />
            <TextInput
                style={{ paddingLeft: 10, fontSize: 18 }}
                placeholder={'Search Your Product'}
            />
        </View>
    )

   
}

const styles = StyleSheet.create({
    searchbox: {
        borderRadius: 10, 
        margin: 10, 
        paddingHorizontal: 15, 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        height: 50, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
})