import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {getDate} from '../utils';
import {useQueryGetCommentByIds} from '../apis/HttpServices';
import Spinner from './Spinner';
import {CommentsStyle} from '../styles/CommentsStyle';

type Props = {
  commentIds: number[];
};

const Comments = ({commentIds}: Props) => {
  const {data: comments, isFetching} = useQueryGetCommentByIds(commentIds);

  return (
    <ScrollView>
      {isFetching ? (
        <Spinner />
      ) : (
        comments?.map(comment => (
          <View key={comment.id} style={CommentsStyle.commentCard}>
            <Text style={CommentsStyle.authorText}>Author: {comment.by}</Text>
            <Text style={CommentsStyle.bodyText}>{comment.text}</Text>
            <Text style={CommentsStyle.dateText}>
              Created At: {getDate(comment.time)}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Comments;
