/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#003300',
        },
        headerStyle: {
          backgroundColor: '#003300',
          borderBottomColor: '#ffffff',
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white',
        },
      }}>
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'lightgreen' : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'CurrentWeather'}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'lightgreen' : 'white'}
            />
          ),
        }}>
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>

      <Tab.Screen
        name={'UpcomingWeather'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'lightgreen' : 'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
