import React, {useState} from "react";
import {FlatList, Text,TouchableHighlight, View, StyleSheet, RefreshControl} from "react-native";


const GameList = ({games, onPress, onRefresh}) => {

  const [refreshing, setRefreshing] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <GameItem
        game={item}
        onPress={() => {onPress(item)}}
        style={styles.item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
      />
    </View>
  );
};

const GameItem = ({ game, onPress}) => (
    <TouchableHighlight onPress={onPress} style={styles.item}>
      <Text style={styles.itemDataText}>{game.title}</Text>
    </TouchableHighlight>
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
    marginBottom: 220 //adjust to line up list with bottom of screen
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D8D8D8",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16
  },
  itemDataText: {
    fontSize: 22,
    color: "#D8D8D8",
    marginLeft: 10
  }
});

export default GameList;
