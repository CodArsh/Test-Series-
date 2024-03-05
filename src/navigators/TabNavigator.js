import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.blurViewStyle}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});


// APP.JS NAVIGATIONS
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DetailsScreen from './src/screens/DetailsScreen';
// import PaymentScreen from './src/screens/PaymentScreen';
// import TabNavigator from './src/navigators/TabNavigator';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen
//           name="Tab"
//           component={TabNavigator}
//           options={{animation: 'slide_from_bottom'}}></Stack.Screen>
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{animation: 'slide_from_bottom'}}></Stack.Screen>
//         <Stack.Screen
//           name="Payment"
//           component={PaymentScreen}
//           options={{animation: 'slide_from_bottom'}}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
