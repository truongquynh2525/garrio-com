import React, {useState} from 'react';
import Navigator from '../components/Navigator';
import {bestStory, newStory, topStory} from '../constants/Page';
import NewStories from './NewStories';
import TopStories from './TopStories';
import BestStories from './BestStories';
import {View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Home = () => {
  const [value, setValue] = useState(newStory);

  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Navigator value={value} setValue={setValue} />
        {value === newStory && <NewStories />}
        {value === topStory && <TopStories />}
        {value === bestStory && <BestStories />}
      </View>
    </QueryClientProvider>
  );
};

export default Home;
