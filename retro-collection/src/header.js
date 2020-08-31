import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable, Image} from 'react-native';

const Header = ({ onBack, title, onIconPress}) => (
  <SafeAreaView style={styles.headerContainer}>
    <View style={styles.header}>
      <View style={styles.headerCenter}>
        <Pressable onPress={onIconPress} style={({pressed})=> [{ backgroundColor: pressed ? '#818489' : '#2D333B' }]}>
          <Image style={styles.icon} source={require('./images/Hamburger_icon.svg.png')} alt="hamburger_icon"/>
        </Pressable>
        <Text accessibilityRole="heading" aria-level="3" style={styles.title}>{title}</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#282c34',
    backgroundColor: '#282c34',
  },
  header: {
    padding: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 10
  },
  headerCenter: {
    flex: 1,
    order: 2
  },
  headerLeft: {
    order: 1,
    width: 80
  },
  headerRight: {
    order: 3,
    width: 80
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white'
  },
  icon: {
    backgroundColor: '#282c34',
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    padding: 5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#56abf0",
    borderWidth: 2,
    width: 50,
    height: 50,
    cursor: "pointer",
    position: "fixed",
  },
});

export default Header;
