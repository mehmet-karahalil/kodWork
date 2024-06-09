import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {getJobs} from '../../core/Requests';
import JobCart from '../../companents/jobCart/JobCart';
import Loading from '../../companents/loading';

interface Job {
  id: number;
  [key: string]: any;
}

const Jobs = ({navigation}: {navigation: any}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  const onPress = (item: any = { contents: '<p>Varsayılan İçerik</p>', name: 'Varsayılan İsim', locations: [{ name: 'Varsayılan Konum' }], levels: [{ name: 'Varsayılan Seviye' }] }) => {
    navigation.navigate('JobDescription', { item });
  };
  
  useEffect(() => {
    setLoading(true);
    getJobs('https://www.themuse.com/api/public/jobs?page=1').then(data => {
      setJobs(data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }


  const renderItem = ({item}: any) => (
    <View>
      <TouchableOpacity activeOpacity={1} onPress={()=>onPress(item)}>
        <JobCart job={item} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Jobs;