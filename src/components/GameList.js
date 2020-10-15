import React, {useState} from "react";
import {FlatList, Text,TouchableHighlight, View, StyleSheet, RefreshControl, Image} from "react-native";


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
  <View style={{justifyContent: 'space-between'}}>
    <TouchableHighlight onPress={onPress} style={styles.item}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.itemDataText}>{game.title}</Text>
        <TouchableHighlight onPress={onPress} style={styles.editTouchArea}>
          <Image
            source={require('../images/3_dot_gray.png')}
            style={styles.editIcon}
          />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
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
    marginBottom: 220 //adjust to line up list with bottom of screen
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D8D8D8",
    padding: 10,
    marginHorizontal: 16,
  },
  itemDataText: {
    fontSize: 18,
    color: "#D8D8D8",
  },
  editIcon: {
    width: 20,
    height: 5,
  },
  editTouchArea: {
    width: 35,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    right: -10, //Forces position using absolute so long item text doesn't shift position
    position: 'absolute'
  }
});

export default GameList;
