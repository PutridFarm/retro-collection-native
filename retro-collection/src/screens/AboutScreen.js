import React from "react";
import {Text, View} from "react-native";

const AboutScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} className="sub-content">
    <Text>
      Retro-collection is my first stab at creating a React app.
      I wanted to created a type of library manager for some of my retro games.
      I hope to keep adding to this project and shape it into a deliverable application for others to enjoy one day.
    </Text>
  </View>
)

export default AboutScreen;
