/**
 * Sample React Native@0.61.5 Template with Navigation and Redux enabled
 * https://github.com/sumedhtare/newProject.git
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {fadeIn} from 'react-navigation-transitions';
import HomePage from './Containers/homepage';
import ProductDetailPage from './Containers/productdetailpage';
import ProductsPage from './Containers/productspage';

const stackScreens ={
  Home:{screen:HomePage},
  Products:{screen:ProductsPage},
  ProductDetail:{screen: ProductDetailPage}
 }

 const stackScreensConfig = {
  transitionConfig: () => fadeIn(),
  // cardStyle:{backgroundColor:'#f8f8f8'},
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
 }

const AppNavigator = createStackNavigator(
  stackScreens,
  stackScreensConfig
  );

export default createAppContainer(AppNavigator);