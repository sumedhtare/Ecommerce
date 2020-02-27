import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function HorizontalTab(props) {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={[styles.title, { fontWeight: props.boldtitle ? '700' : '300' }]}>{props.title}</Text>
               <TouchableOpacity onPress={()=> props.onPress()}>
                <Text>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{paddingVertical: 20 }}
                contentContainerStyle={{ marginLeft: 15, }}>
                {props.small?smallview(props):bigview(props)}
            </ScrollView>
        </View>
    )
}

function smallview(props){
return props.data.map((item, index) => {
    if(index<5)
    return (
        <TouchableOpacity style={[styles.smallview, { backgroundColor: item.color }]}>
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>{item.title}</Text>
        </TouchableOpacity>
    )
})
}

function bigview(props){
    return props.data.map((item, index) => {
        if(index<5)
        return (
            <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail',{data:item})}>
            <View style={[styles.smallview, { backgroundColor: item.color,height:170 }]}/>
            <Text style={{marginTop:10}}>{item.cost}</Text>
            <Text style={{marginTop:5}}>{item.title}</Text>
            </TouchableOpacity>
        )
    })
    }

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20,
    },
    smallview: {
        borderRadius: 10,
        height: 100,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,

        // elevation: 10,
    }
})