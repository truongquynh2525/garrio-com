import React, {useState} from 'react';
import {bestStory, newStory, topStory} from '../constants/Page';
import NewStories from './NewStories';
import TopStories from './TopStories';
import BestStories from './BestStories';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Home = () => {
  const [value, setValue] = useState(newStory);

  return (
    <QueryClientProvider client={queryClient}>
      {value === newStory && <NewStories value={value} setValue={setValue} />}
      {value === topStory && <TopStories value={value} setValue={setValue} />}
      {value === bestStory && <BestStories value={value} setValue={setValue} />}
    </QueryClientProvider>
  );
};

export default Home;
