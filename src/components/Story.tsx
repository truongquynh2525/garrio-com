import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Story as IStory} from '../types/Story';

type Props = {
  story: IStory;
};

const Story = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Title: {props.story.title}</Text>
      <Text>Author: {props.story.by}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    borderColor: 'black',
  },
});

export default Story;
