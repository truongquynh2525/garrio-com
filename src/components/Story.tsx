import React from 'react';
import {Text, View} from 'react-native';
import {Story as IStory} from '../types/Story';
import {StoryStyle} from '../styles/StoryStyle';

type Props = {
  story: IStory;
};

const Story = (props: Props) => {
  return (
    <View style={StoryStyle.container}>
      <Text>Title: {props.story.title}</Text>
      <Text>Author: {props.story.by}</Text>
    </View>
  );
};

export default Story;
