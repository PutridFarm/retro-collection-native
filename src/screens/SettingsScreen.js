import React, {useState, useEffect} from "react";
import {Text, View, FlatList, StyleSheet, Image,RefreshControl} from "react-native";
import {getDatabaseURL} from '../utils';

const SettingsScreen = () => {
  
    const [consoleList, setConsoleList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const url = getDatabaseURL();

    useEffect (() => {
        fetchConsoleList();
      },[]);

    /*Reads the console list from the database, setting the global
    console list variable. Initializes the consoleId as the first console
    in the list*/
    function fetchConsoleList() {
        console.log("fetchingConsoleList...")
        fetch(url + "consoles")
        .then(response => {
            return response.json();
        })
        .then(data => {
            setConsoleList(data.consoles);
        })
        .catch(error=>{
            console.log(error)
        });
    }

    const renderItem = ({ item }) => {
        return (
          <ConsoleItem
            console={item}
            onPress={(item) => {handleConsoleSelection(item)}}
            style={styles.item}
          />
        );
      };

    function handleConsoleSelection(item)
    {
        console.log("console was pressed");
    }

    function onRefresh(item)
    {
        fetchConsoleList();
    }

    return(
        <View style={{ backgroundColor: '#363c46', alignItems: 'stretch', flex:1, padding: 10}}>
            <View style={{
                    padding: 10, 
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: '#4488c0',
                    backgroundColor: '#2D333B',
                    marginTop: 10,
                    
            }}>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                        <View><Text>Name</Text></View>
                        <View><Text>ID</Text></View>
                        <View><Text>Enabled</Text></View>
                </View>
                <FlatList
                    data={consoleList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                />
            </View>
        </View>
    )
}

const ConsoleItem = ({ console, onPress}) => (
    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
            <View><Text>{console.name}</Text></View>
            <View><Text>{console.id}</Text></View>
            <View><Text>{console.active ? 'enabled' : 'disabled'}</Text></View>
    </View>
);

var styles = StyleSheet.create({
    container: {
      backgroundColor: '#2D333B',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderColor: '#4488c0',
    },
    item: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "#D8D8D8",
      padding: 15,
      flexDirection: 'row', justifyContent: 'space-between'
    },
    itemDataText: {
      fontSize: 18,
      color: "#D8D8D8",
    }
  });

export default SettingsScreen;
