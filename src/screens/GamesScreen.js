import React from "react";
import {View} from "react-native";
import Games from '../components/Games';

const GamesScreen = ({navigation}) => (
    <View style={{backgroundColor: '#363c46', flexGrow: 1}}>
        <Games navigation={navigation}/>
    </View>
)

export default GamesScreen;
