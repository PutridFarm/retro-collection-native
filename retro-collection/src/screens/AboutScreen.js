import React from "react";
import {Text, View, SafeAreaView, ScrollView} from "react-native";
import {getApplicationVersion} from '../utils';

const AboutScreen = () => (
  <SafeAreaView style={{ backgroundColor: '#363c46', flexGrow: 1, alignItems: 'center', padding: 10}}>
      <ScrollView>
        <View style={{
          padding: 10, borderRadius: 5,
          borderWidth: 2,
          borderColor: '#4488c0',
          backgroundColor: '#2D333B',
          marginTop: 10,
          }}>
          <Text style={{color: '#CECECE',fontSize: 18,marginBottom: 10}}>
          Retro-collection is my attempt at creating a React app.
          I wanted to created a type of library manager for some of my retro games.
          I hope to keep adding to this project and shape it into a deliverable application for others to enjoy one day.
          </Text>
          <View>
            <Text style={{color: '#CECECE', marginTop: 30}}>
              Author: Michael Young
              {'\n'}
              Date Created: Sept 14, 2020
              {'\n'}
              Version: {getApplicationVersion()}
              {'\n'}
            </Text>
          </View>
        </View>

        <View style={{
          padding: 10, borderRadius: 5,
          borderWidth: 2,
          borderColor: '#4488c0',
          backgroundColor: '#2D333B',
          marginTop: 10,
          }}>
          <Text style={{color: '#CECECE', fontSize: 20, padding: 10, fontWeight: "bold"}}>
            Support
          </Text>  
          <Text style={{color: '#CECECE',fontSize: 18,marginTop: 10}}>
            If you would like to support the developement of Retro Collection, every little bit helps and is greatly appreciated, thank you so much for your support!
            {'\n'}
            {'\n'}
            Patreon - 
            {'\n'}
            PayPal - 
            {'\n'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
)

export default AboutScreen;
