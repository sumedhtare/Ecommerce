import React,{useState,Component} from 'react'
import {View,SafeAreaView,ScrollView,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import SearchBar from '../Components/searchbar'
import Header from '../Components/header'

export default function ProductsPage(props){
    console.log('ProductsPage',props.navigation.getParam('data'))
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
            <Header search={true} back={true} nav={props.navigation}/>
            <View>
                <Text style={styles.title}>{props.navigation.getParam('title')}</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={props.navigation.getParam('data')}
            style={{flex:1}}
            contentContainerStyle={{ flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}
            renderItem={({ item, index }) => {
                console.log(item)
                 if(props.navigation.getParam('small'))
                 return (
                    <TouchableOpacity style={[styles.smallview, { backgroundColor: item.color }]}>
                    <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>{item.title}</Text>
                </TouchableOpacity>
                 )
                 else{
                     return(
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail',{data:item})}>
                        <View style={[styles.smallview, { backgroundColor: item.color,height:170 }]}/>
                        <Text style={{marginTop:10,marginLeft:15}}>{item.cost}</Text>
                        <Text style={{marginTop:5,marginLeft:15}}>{item.title}</Text>
                        </TouchableOpacity>
                     )
                 }
                
            }}
            />

           
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft:15
    },
    smallview: {
        borderRadius: 10,
        height: 100,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
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