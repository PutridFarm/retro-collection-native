import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const GameItem = ({ game }) => {
  //const backgroundColor = game.id === selectedId ? "#111111" : "FFFFFF";

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, styles]}>
      <Text style={styles.rowDataText}>{`${game.title}`}</Text>
      <Text style={styles.rowDataSubText}>{game.consoleId}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    textAlign: "left",
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#2D333B",
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

export default GameItem;
