import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Article from '../components/Article';
import Navigator from '../components/Navigator';
import Spinner from '../components/Spinner';
import Story from '../components/Story';
import {pageStyles} from '../styles/PageStyle';
import {Story as IStory} from '../types/Story';

type Props = {
  selectedStoryId: number;
  setSelectedStoryId: React.Dispatch<React.SetStateAction<number>>;
  stories: IStory[];
  isLoading: boolean;
  hasMore: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const StoryBody = ({
  selectedStoryId,
  hasMore,
  isLoading,
  value,
  stories,
  setPage,
  setValue,
  setSelectedStoryId,
}: Props) => {
  const back = () => {
    setSelectedStoryId(0);
  };

  const loadMoreStories = () => {
    if (hasMore && !isLoading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }

    return <Spinner />;
  };

  return (
    <>
      {selectedStoryId === 0 && <Navigator value={value} setValue={setValue} />}
      <View style={pageStyles.container}>
        {isLoading && stories.length === 0 ? (
          <Spinner />
        ) : (
          <>
            {selectedStoryId === 0 ? (
              <FlatList
                data={stories}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[
                      pageStyles.storyItem,
                      selectedStoryId === item.id && pageStyles.selectedStory,
                    ]}
                    onPress={() => setSelectedStoryId(item.id)}>
                    <Story story={item} />
                  </TouchableOpacity>
                )}
                onEndReached={loadMoreStories}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
              />
            ) : (
              <Article storyId={selectedStoryId} back={back} />
            )}
          </>
        )}
      </View>
    </>
  );
};

export default StoryBody;
