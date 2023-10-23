import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {WeatherType} from '../utility/WeatherType';
import moment from 'moment';

const ListItem = props => {
  // const {dt_text, min, max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather
        name={WeatherType[props.condition].icon}
        size={50}
        color={'white'}
      />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(props.dt_text).format('dddd')}</Text>
        <Text style={styles.date}>
          {moment(props.dt_text).format('h:mm:ss a')}
        </Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(props.max)}° / ${Math.round(
        props.min,
      )}°`}</Text>
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
  dateTextWrapper: {
    flexDirection: 'column',
  },
});
export default ListItem;
