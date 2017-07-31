/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create component
const App = () =>(
    <View>
      <Header headerText={'Albums!'}/>
      <AlbumList/>
    </View>
  );

//render it to the device
AppRegistry.registerComponent('myAlbum',()=>App);