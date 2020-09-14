import React from "react";
import {FlatList, Text,TouchableHighlight, View, StyleSheet} from "react-native";

const GameList = ({headerComponent, games, onPress, style}) => {

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
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#56abf0',
    marginBottom: 165
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
