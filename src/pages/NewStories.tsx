import React, {useState} from 'react';
import {getNewStories} from '../apis/HttpServices';
import {usePaginatedStories} from '../hooks/Paginated';
import StoryBody from './Body';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const NewStories = (props: Props) => {
  const [selectedStoryId, setSelectedStoryId] = useState<number>(0);
  const {stories, isLoading, hasMore, setPage} = usePaginatedStories(
    1,
    10,
    getNewStories,
  );

  return (
    <StoryBody
      selectedStoryId={selectedStoryId}
      setSelectedStoryId={setSelectedStoryId}
      hasMore={hasMore}
      isLoading={isLoading}
      setPage={setPage}
      value={props.value}
      setValue={props.setValue}
      stories={stories}
    />
  );
};

export default NewStories;
