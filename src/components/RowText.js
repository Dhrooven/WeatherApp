import React from 'react';
import {View, Text} from 'react-native';

const RowText = props => {
  const {text1, text2, bodyStyles, text1Styles, text2Styles} = props;
  return (
    <View style={bodyStyles}>
      <Text style={text1Styles}>{text1}</Text>
      <Text style={text2Styles}>{text2}</Text>
    </View>
  );
};

export default RowText;
