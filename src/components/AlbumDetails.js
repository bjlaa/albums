import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetails = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetails;
