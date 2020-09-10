import React from "react";
import {Text, View} from "react-native";
import Games from '../components/Games';

const GamesScreen = ({consoleList}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} className="sub-content">
        <Games consoleList={{name: 'SNES', id: 'snes'}}></Games>
    </View>
)

export default GamesScreen;
