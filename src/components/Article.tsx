import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useQueryGetStoryById} from '../apis/HttpServices';
import Spinner from './Spinner';
import {getDate} from '../utils';
import Comments from './Comments';
import {ArticleStyle} from '../styles/ArticleStyle';

type Props = {
  storyId: number;
  back: () => void;
};

const Article = (props: Props) => {
  const {data: story, isFetching} = useQueryGetStoryById(props.storyId);

  return (
    <View style={ArticleStyle.articleContainer}>
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => props.back()}
            style={ArticleStyle.backButton}>
            <Text style={ArticleStyle.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <View style={ArticleStyle.storyInfoContainer}>
            <Text style={ArticleStyle.titleText}>
              Title: {story?.data.title}
            </Text>
            <Text style={ArticleStyle.bodyText}>
              Score: {story?.data.score}
            </Text>
            <Text style={ArticleStyle.bodyText}>
              Time: {getDate(story?.data.time)}
            </Text>
            <Text style={ArticleStyle.bodyText}>URL: {story?.data.url}</Text>
            <Text style={ArticleStyle.authorText}>
              Author: {story?.data.by}
            </Text>
          </View>
          <Text style={ArticleStyle.commentsHeader}>Comments:</Text>
          {story?.data.kids && <Comments commentIds={story?.data.kids} />}
        </>
      )}
    </View>
  );
};

export default Article;
