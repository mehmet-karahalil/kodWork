import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./favorites.style";
import { consoleLog, deleteFavorite } from "../../store/Favorites";

const Favorites = () => {
  const favorites = useSelector((state: any) => state.favorites.favorites || []);
  console.log(favorites.map((item: any) => item.item.id));
  const dispatch = useDispatch();

  const deleteFav = (id: any) => {
    dispatch(deleteFavorite({ id }));
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.item.name}</Text>
      <Text style={styles.text}>{item.item.categories[0].name}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{item.item.locations[0].name}</Text>
      </View>
      <Text style={styles.levels}>{item.item.levels[0].name}</Text>
      <Button
        title="Delete"
        onPress={() => deleteFav(item.item.id)}
      />
    </View>
  );

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item, index) => item.item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorites found</Text>
        </View>
      )}
    />
  );
};

export default Favorites;
