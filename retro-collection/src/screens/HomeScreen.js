import React from "react";
import {Text, View, StyleSheet} from "react-native";

const HomeScreen = () => (
    <View style={{ backgroundColor: '#363c46', flex: 1, alignItems: 'center', padding: 10}}>
      <Text style={{...styles.textShadow, fontSize: 24, padding: 10}}>
        Welcome to Retro-Collection!
      </Text>
      <View style={{
        padding: 10, 
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4488c0',
        backgroundColor: '#2D333B',
        }}>
        <Text style={{color: '#CECECE', fontSize: 10}}>
          Sept 14, 2020
        </Text>
        <Text style={{color: '#CECECE', fontSize: 20, padding: 10}}>
          What's new?
        </Text>
        <Text style={{color: '#CECECE', fontSize: 16,marginBottom: 10}}>
          At this point, the entire app! This is the first iteration of Retro Collection, an app made for your personal collection of retro video games.
        </Text>
        <Text style={{color: '#CECECE', fontSize: 16,marginBottom: 10}}>
          Feel free to add as many games as you'd like, for whichever platform/console that makes up your collection!
        </Text>
      </View>
    </View>
)

var styles = StyleSheet.create({
  textShadow:{
    fontWeight: "bold",
    textShadowColor:'#585858',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:2,
  }
});

export default HomeScreen;
