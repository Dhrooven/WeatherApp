import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ListItem = props => {
  // const {dt_text, min, max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{props.dt_text}</Text>
      <Text style={styles.temp}>{props.temp_max}</Text>
      <Text style={styles.temp}>{props.temp_min}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'brown',
    borderRadius: 50,
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});
export default ListItem;
