import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const IconText = props => {
  const {IconName, IconSize, IconColor, Icontext, IconTextStyles} = props;
  return (
    <View style={styles.container}>
      <Feather name={IconName} size={IconSize} color={IconColor} />
      <Text style={[styles.Icontext, IconTextStyles]}>{Icontext}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Icontext: {
    fontWeight: 'bold',
  },
});

export default IconText;
