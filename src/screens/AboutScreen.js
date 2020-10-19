import React from "react";
import {Text, View, SafeAreaView, ScrollView, StyleSheet, Image} from "react-native";
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
          <Text style={{color: '#CECECE', fontSize: 20, fontWeight: "bold"}}>
            Support
          </Text>
          <Text style={{color: '#CECECE',fontSize: 18, marginVertical: 10}}>
            If you would like to support the developement of Retro Collection, every little bit helps and is greatly appreciated, thank you so much for your support!
          </Text>
            <Image style={styles.paypal} source={require('../images/paypal_donate.png')} alt="paypal_button"/>
            <Image style={styles.patreon} source={require('../images/patreon_fiery_coal_logo.png')} alt="patreon_button"/>
        </View>
      </ScrollView>
    </SafeAreaView>
)

var styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
  },
  paypal: {
    width: 125,
    height: 37,
    marginVertical: 5
  },
  patreon: {
    width: 130,
    height: 29,
    marginVertical: 5
  }
});

export default AboutScreen;
