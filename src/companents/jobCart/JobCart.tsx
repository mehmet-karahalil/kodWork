import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Styles from './jobcart.style';

interface JobCartProps {
  job: any;

}

const JobCart = ({job }: JobCartProps) => {
  return (

      <View style={Styles.container}>
        <Text style={Styles.title}>{job.name}</Text>
        <Text style={Styles.text}>{job.categories[0].name}</Text>
        <View style={Styles.locationContainer}>
          <Text style={Styles.location}>{job.locations[0].name}</Text>
        </View>
        <Text style={Styles.levels}>{job.levels[0].name}</Text>
      </View>

  );
};

export default JobCart;