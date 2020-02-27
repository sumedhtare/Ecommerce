import React, { useState, Component } from 'react'
import { View, SafeAreaView, ScrollView, Text, Dimensions,TouchableOpacity,StyleSheet } from 'react-native'
import SearchBar from '../Components/searchbar'
import Header from '../Components/header'
import HorizontalTab from '../Components/horizontaltab'
const { height, width } = Dimensions.get("window");
const ProductContext = React.createContext();

export default class ProductDetailPage extends Component {
   
    render(){
        const data = this.props.navigation.getParam('data');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
            <ProductContext.Provider value={['S','M','L','XXL']}>
            <Header search={true} back={true} nav={this.props.navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    style={{ width: width * .90 }}
                    contentContainerStyle={{}}
                >
                    <View style={{ width: width * .90, height: height * .25, backgroundColor: 'rgba(0,100,1,0.2)' }} />
                    <View style={{ width: width * .90, height: height * .25, backgroundColor: 'rgba(255,0,0,0.2)' }} />
                    <View style={{ width: width * .90, height: height * .25, backgroundColor: 'rgba(0,0,255,0.2)' }} />

                </ScrollView>
                <View style={{ width: width * .90, marginTop: 20 }}>
                    <Text style={{ fontSize: 20 }}>{data.title}</Text>
                    <Text style={{ fontSize: 20, marginTop: 15, color: 'rgba(0,0,255,0.6)' }}>{data.cost}</Text>
                </View>
                
                <View style={{ width, borderTopWidth: .6, borderBottomWidth: .6, flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <View style={{ height: 30, width: 50, backgroundColor: 'rgba(0,0,255,0.6)', borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginVertical: 10, marginLeft: 10 }}>
                        <Text style={{ color: '#fff' }}>4.5</Text>
                    </View>
                    <Text style={{ marginLeft: 20, fontSize: 18 }}>Very Good</Text>
                    <Text style={{ position: 'absolute', right: 15, fontSize: 16, color: 'rgba(0,0,255,0.6)' }}>49 Reviews</Text>
                </View>

                <View style={{width,padding:15}}>
                    <Text>Description</Text>
                    <Text style={{marginTop:15, color:'#4f4f4f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
                <SizeAndColor/>
                <TouchableOpacity style={{backgroundColor:'rgba(0,0,255,0.6)',height:50,width, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:18, fontWeight:'700'}}>BUY NOW</Text>
                </TouchableOpacity>
                
            </ScrollView>
            </ProductContext.Provider>
        </SafeAreaView>
    )
    }

}

class SizeAndColor extends Component {
    render() {
    return(
        
         <ProductContext.Consumer>
             {value => 
             <View>
            <View style={{ width, borderTopWidth: .6, borderBottomWidth: .6, flexDirection: 'row', marginTop: 15, alignItems: 'center',justifyContent:'center',height:40 }}>
                    <TouchableOpacity>
                    <Text style={{fontSize:18, fontWeight:'700'}}>Select Size</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:15}}>
                    <Text style={{fontSize:18,}}>Select Color</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', width, justifyContent:'center'}}>
                    <View style={styles.smallview}>
                        <Text>{value[0]}</Text>
                    </View>
                    <View style={[styles.smallview,{backgroundColor:'rgba(0,0,255,0.6)'}]}>
                        <Text style={{color:'#fff'}}>{value[1]}</Text>
                    </View>
                    <View style={styles.smallview}>
                        <Text>{value[2]}</Text>
                    </View>

                    <View style={[styles.smallview,{backgroundColor:'rgba(0,0,0,0)'}]}>
                        <Text>{value[3]}</Text>
                    </View>
                </View>
            </View>}
        </ProductContext.Consumer>
        
    )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft:15
    },
    smallview: {
        borderRadius: 5,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor:'#b3b3b3',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})