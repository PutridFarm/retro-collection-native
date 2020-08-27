import React, { useState } from "react";
import {FlatList, Pressable, Text, StyleSheet} from "react-native";

const GameList = ({games, onPress, style}) => {

  const renderItem = ({ item }) => {
    return (
      <GameItem
        game={item}
        onPress={() => {onPress(item)}}
        style={{ style }}
      />
    );
  };

  return (
    <FlatList
      data={games}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const GameItem = ({ game, onPress, style}) => {

  return (
    <Pressable onPress={onPress} style={({pressed})=> [styles.row, { backgroundColor: pressed ? '#818489' : '#2D333B' }]}>
      <Text style={styles.rowDataText}>{`${game.title}`}</Text>
      <Text style={styles.rowDataSubText}>{game.consoleId}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    textAlign: "left",
    padding: 15,
    marginBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D8D8D8"
  },
  rowData: {
    flex: 1
  },
  rowDataText: {
    fontSize: 18,
    color: "#D8D8D8",
    marginLeft: 10
  },
  rowDataSubText: {
    fontSize: 13,
    opacity: 0.8,
    color: "#a8a689",
    marginTop: 4,
    marginLeft: 10
  }
});


export default GameList;
