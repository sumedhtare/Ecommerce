import React,{useState,Component} from 'react'
import {View,SafeAreaView,ScrollView,Text} from 'react-native'
import SearchBar from '../Components/searchbar'
import Header from '../Components/header'
import HorizontalTab from '../Components/horizontaltab'
export default function HomePage(props){
    
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
            <Header nav={props.navigation}/>
            <SearchBar/>
            <ScrollView
            showsVerticalScrollIndicator={false}>
           <HorizontalTab title={"Catagories"} data={data.catagories} navigation={props.navigation} small={true} onPress={()=>props.navigation.navigate('Products',{data:data.catagories,title:'Catagories',small:true})}/>
           <HorizontalTab title={"Featured"} data={data.featured} boldtitle={true} navigation={props.navigation} onPress={()=>props.navigation.navigate('Products',{data:data.featured,title:'Featured'})}/>
           <HorizontalTab title={"Best Sell"} data={data.bestsell} boldtitle={true} navigation={props.navigation} onPress={()=>props.navigation.navigate('Products',{data:data.bestsell,title:'Best Sell'})}/>
           </ScrollView>
        </SafeAreaView>
    )
    
}

const data ={
    catagories:[
        {color:'rgba(0,255,255,0.2)',
        title:'Women'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids'},
        {color:'rgba(0,255,255,0.2)',
        title:'Women'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids'},
        {color:'rgba(0,255,255,0.2)',
        title:'Women'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids'},
        {color:'rgba(0,255,255,0.2)',
        title:'Women'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids'}

    ],
    featured:[
        {color:'rgba(0,255,255,0.2)',
        title:'Women T-shirt',
        cost:'$55.00'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men T-shirt',
        cost:'$34.00'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids T-shirt',
        cost:'$25.00'},
        {color:'rgba(0,255,255,0.2)',
        title:'Women T-shirt',
        cost:'$55.00'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men T-shirt',
        cost:'$34.00'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids T-shirt',
        cost:'$25.00'},
        {color:'rgba(0,255,255,0.2)',
        title:'Women T-shirt',
        cost:'$55.00'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men T-shirt',
        cost:'$34.00'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids T-shirt',
        cost:'$25.00'}
    ],
    bestsell:[
        {color:'rgba(0,255,255,0.2)',
        title:'Women T-shirt',
        cost:'$55.00'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men T-shirt',
        cost:'$34.00'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids T-shirt',
        cost:'$25.00'},
        {color:'rgba(0,255,255,0.2)',
        title:'Women T-shirt',
        cost:'$55.00'},
        {color:'rgba(255,0,0,0.2)',
        title:'Men T-shirt',
        cost:'$34.00'},
        {color:'rgba(0,0,255,0.2)',
        title:'Kids T-shirt',
        cost:'$25.00'}
    ]
}
