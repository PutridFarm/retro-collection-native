import React, { Component , useState} from 'react';
import ReactDOM from 'react-dom';
//import './css/index.css';
//import * as serviceWorker from './serviceWorker';

import GameScreen from './screens/GamesScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen'
import GameDetailsScreen from './screens/GameDetailsScreen';

import {
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

import { 
  NavigationContainer
} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


//onPress={() => navigation.navigate('Notifications')}

export default function MainApp() {

  const [openSideMenu, setOpenSideMenu] = useState(true);

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const SideMenuIcon = ({navigation}) => (
    <TouchableHighlight onPress={() => navigation.openDrawer()}>
      <Image style={styles.icon} source={require('./images/Hamburger_icon.svg.png')} alt='hamburger_icon'/>
    </TouchableHighlight>
  );

  //Consistent header across all drawer screens.
  const StackScreenHeaderOptions = ({navigation}) => (
    {
      headerStyle: {
        backgroundColor: '#252930',
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
        name='Retro Collection'
        component={HomeScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
    </Stack.Navigator>
  );

  const GameStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name='Games'
        component={GameScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
      <Stack.Screen
        name='GameDetails'
        component={GameDetailsScreen}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: '#252930',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: route.params.title 
        })} //Need this to set title when opening GameDetails
      />
    </Stack.Navigator>
  );

  const SettingsStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
    </Stack.Navigator>
  );

  const AboutStackScreen = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name='About'
        component={AboutScreen}
        options={StackScreenHeaderOptions({navigation})}
      />
    </Stack.Navigator>
  );

    return (
      <NavigationContainer>
        <Drawer.Navigator 
          drawerStyle={{
            flex: 1,
            backgroundColor: '#363c46',
            width: 170,
            
          }}
          drawerContentOptions={{
            activeTintColor: '#56abf0',
            inactiveTintColor: '#D8D8D8',
            itemStyle: {
              width: 145,
              alignItems: 'center',
              borderWidth: 2,
            },
            labelStyle: { //style object to apply to the Text style inside content section which renders a label
              fontSize: 18,
              
              marginLeft: 15, //Center the label inside the item. Appears to be a bug with any other centering technique on parents items
              marginRight: -15//https://github.com/react-navigation/react-navigation/issues/7905
            },
            style: {} //style object for the wrapper view
          }}
          >
          <Drawer.Screen 
            name='Home' 
            component={HomeStackScreen}
            options={{drawerIcon: ({ tintColor }) => (
              <Image
                source={require('./images/home_icon.png')}
                style={[styles.drawerIcon, { tintColor: tintColor }]}
              />
            )}}
          />
          <Drawer.Screen 
            name='Games' 
            component={GameStackScreen} 
            options={{drawerIcon: ({ tintColor }) => (
              <Image
                source={require('./images/games_icon.png')}
                style={[{...styles.drawerIcon}, { marginLeft: 10 }]}
              />
            )}}
          />
          <Drawer.Screen name='Settings' component={SettingsStackScreen} 
            options={{drawerIcon: ({ tintColor }) => (
              <Image
                source={require('./images/gear_icon.png')}
                style={[{...styles.drawerIcon}, { marginLeft: 10 }]}
              />
            )}}
          />
          <Drawer.Screen name='About' component={AboutStackScreen} 
            options={{drawerIcon: ({ tintColor }) => (
              <Image
                source={require('./images/question_mark_icon.png')}
                style={[{...styles.drawerIcon}]}
              />
            )}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

var styles = StyleSheet.create({
  app: {
      flex: 1,
      backgroundColor: '#363c46',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  content: {
    width: 'auto',
  },
  icon: {
    backgroundColor: '#282c34',
    marginLeft: 10,
    borderRadius: 10,
    borderColor: '#4488c0',
    borderWidth: 2,
    width: 45,
    height: 45
  },
  drawerIcon: {
    width: 50,
    height: 50,
    marginRight: -35
  }
});