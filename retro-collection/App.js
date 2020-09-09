import React, { Component , useState} from 'react';
import ReactDOM from 'react-dom';
//import './css/index.css';
//import * as serviceWorker from './serviceWorker';
import GameScreen from "./src/screens/Games";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";

import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
  Image
} from 'react-native';

import { 
  NavigationContainer
} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


//onPress={() => navigation.navigate('Notifications')}

export default function App() {

  const [consoleList, setConsoleList] = useState([]);
  const [openSideMenu, setOpenSideMenu] = useState(true);

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const SideMenuIcon = ({navigation}) => (
    <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
      <Image style={styles.icon} source={require('./src/images/Hamburger_icon.svg.png')} alt="hamburger_icon"/>
    </TouchableHighlight>
  );

  //Consistent header across all drawer screens.
  const StackScreenHeaderOptions = ({navigation}) => (
    {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => SideMenuIcon({navigation})
    }
  );

  const HomeStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Retro Collection"
        component={HomeScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
    </Stack.Navigator>
  );

  const GameStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Games"
        component={GameScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
    </Stack.Navigator>
  );

  const AboutStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
    </Stack.Navigator>
  );

  function fetchConsoleList() {
    fetch('/consoles')
     .then(response => {
       return response.json()
     })
     .then(data => {
       this.setState({ consoleList: data.consoles});
     })
     .catch(error=>{
       console.log(error)
     });
  }

    return (
      //<View style={styles.app}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Games" component={GameStackScreen} />
            <Drawer.Screen name="About" component={AboutStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      //</View>
    );
}

const SideNavMenu = (visible) => (
  <View style={{
    flex: 1,
    width: 100,
    flexDirection: 'column',
    backgroundColor: '#212111',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }}>
    <View style={{
        width: 100,
        height: 10,
        padding: 25,
      }}><Text style={styles.whiteText}>Home</Text></View>
      <View style={{
        width: 100,
        height: 10,
        padding: 25,
      }}><Text style={styles.whiteText}>Games</Text></View>
      <View style={{
        width: 100,
        height: 10,
        padding: 25,
      }}><Text style={styles.whiteText}>About</Text></View>
      <View style={{
        width: 100,
        height: 10,
        padding: 25,
      }}></View>
  </View>
)

var styles = StyleSheet.create({
  app: {
      flex: 1,
      backgroundColor: '#F1F1F1',
      // Set content's vertical alignment.
      justifyContent: 'center',
      // Set content's horizontal alignment.
      alignItems: 'center',
      textAlign: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  content: {
    width: 'auto',
  },
  sideMenu: {
    flex:1,
    flexDirection: 'column',
    padding: 0,
    width: 100,
    backgroundColor: '#2D333B',
  },
  sideMenuItem: {
    backgroundColor: '#2D333B',
    margin: 0,
    padding: 20,
    fontSize: 18,
    color: '#FFFFFF'
  },
  icon: {
    backgroundColor: '#282c34',
    padding: 5,
    borderRadius: 10,
    borderColor: "#56abf0",
    borderWidth: 2,
    width: 50,
    height: 50
  }
});