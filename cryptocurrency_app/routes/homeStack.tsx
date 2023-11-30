import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';
// import { Pressable, Text } from 'react-native';
// import HomeScreen from '../screens/Home';
// import CardScreen from '../screens/CardScreen';
import { colors } from '../globalStyle/colors';

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
        options={({ route }) => ({
          title: route.name === 'DetailScreen' ? 'Back' : 'Cryptocurrency list',
        })}
      />
      <Stack.Screen
        name='DetailScreen'
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params?.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
