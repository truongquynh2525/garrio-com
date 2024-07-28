import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {getTopStories} from '../apis/HttpServices';
import Story from '../components/Story';
import {Story as IStory} from '../types/Story';
import {pageStyles} from '../styles/PageStyle';
import {spinnerColor, spinnerSize} from '../constants/Spinner';

const TopStories = () => {
  const [selectedStoryId, setSelectedStoryId] = useState<number>(0);

  const {data: res, isFetching} = useQuery({
    queryKey: ['new-stories'],
    queryFn: () => getTopStories({page: 1, limit: 10}),
  });

  return (
    <View style={pageStyles.container}>
      {isFetching ? (
        <ActivityIndicator
          size={spinnerSize}
          color={spinnerColor}
          style={pageStyles.spinner}
        />
      ) : (
        <View style={pageStyles.storyContainer}>
          {res &&
            res?.map((item: IStory) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  pageStyles.storyItem,
                  selectedStoryId === item.id && pageStyles.selectedStory,
                ]}
                onPress={() => setSelectedStoryId(item.id)}>
                <Story story={item} />
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};

export default TopStories;
