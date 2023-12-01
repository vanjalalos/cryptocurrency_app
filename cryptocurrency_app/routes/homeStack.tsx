import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';
// import { Pressable, Text } from 'react-native';
// import HomeScreen from '../screens/Home';
// import CardScreen from '../screens/CardScreen';
import { colors } from '../globalStyle/colors';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: colors.textWhite,
        contentStyle: { backgroundColor: colors.secondary },
      }}>
      <Stack.Screen
        name='Home'
        component={MainScreen}
        options={() => ({
          title: 'Cryptocurrency list',
        })}
      />
      <Stack.Screen
        name='DetailScreen'
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params?.name,
        })}
      />
      <Stack.Screen
        name='Search'
        component={SearchScreen}
        options={() => ({
          title: 'Search',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
