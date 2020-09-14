import React from "react";
import {Text, View} from "react-native";
import Games from '../components/Games';

const GamesScreen = ({consoleList}) => (
    <View style={{backgroundColor: '#363c46', flexGrow: 1}}>
        <Games/>
    </View>
)

export default GamesScreen;
