import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView, ActivityIndicator, View, Text, TouchableOpacity, Alert } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../store/Favorites';
import styles from './jobDescription.styles';

type RootStackParamList = {
  Jobs: undefined;
  JobDescription: { item: any };
};

type JobDescriptionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JobDescription'>;
type JobDescriptionRouteProp = RouteProp<RootStackParamList, 'JobDescription'>;

type JobDescriptionProps = {
  route: JobDescriptionRouteProp;
  navigation: JobDescriptionScreenNavigationProp;
};

const JobDescription: React.FC<JobDescriptionProps> = ({ route, navigation }) => {
  const htmlContent = route.params?.item?.contents || '<p>Varsayılan İçerik</p>';
  const { width } = Dimensions.get('window');



  const favorites = useSelector((state: any) => state.favorites.favorites);
  const dispatch = useDispatch();

  const itemExists = favorites.some((favorite: any) => favorite.item.id === route.params.item.id);

  const handleApply = () => {
    // Apply action
  };

  const handleSave = () => {
    dispatch(addFavorite({
      item: route.params.item,
    }));
  };

  const handleDelete = () => {
    dispatch(deleteFavorite({
      id: route.params.item.id,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{route.params.item.name}</Text>
          <Text style={styles.subtitle}><Text style={styles.subtitleHighlight}>Location: </Text>{route.params.item.locations[0].name}</Text>
          <Text style={styles.subtitle}><Text style={styles.subtitleHighlight}>Job level: </Text>{route.params.item.levels[0].name}</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Job detail</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>

          <View style={styles.htmlContainer}>
            <RenderHtml contentWidth={width} source={{ html: htmlContent }} />
          </View>

      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleApply} style={styles.button}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
        {itemExists ? (
          <TouchableOpacity onPress={handleDelete} style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default JobDescription;
