/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabBenvenutoScreen from '../screens/TabBenvenutoScreen';
import TabLeggiScreen from '../screens/TabLeggiScreen';
import NotizieScreen from '../screens/NotizieScreen';
import { BottomTabParamList, TabBenvenutoParamList, TabLeggiParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Benvenuto"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Benvenuto"
        component={TabBenvenutoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Leggi"
        component={TabLeggiNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabBenvenutoStack = createStackNavigator<TabBenvenutoParamList>();

function TabBenvenutoNavigator() {
  return (
    <TabBenvenutoStack.Navigator>
      <TabBenvenutoStack.Screen
        name="TabBenvenutoScreen"
        component={TabBenvenutoScreen}
        options={{ 
          headerTitle: ''
        }}
      />
    </TabBenvenutoStack.Navigator>
  );
}

const TabLeggiStack = createStackNavigator<TabLeggiParamList>();

function TabLeggiNavigator() {
  return (
    <TabLeggiStack.Navigator>
      <TabLeggiStack.Screen
        name="TabLeggiScreen"
        component={TabLeggiScreen}
        options={{ 
          headerTitle: ''
        }}
      />
      <TabLeggiStack.Screen
        name="NotizieScreen"
        component={NotizieScreen}
        options={{ 
          headerTitle: ''
        }}
      />
    </TabLeggiStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});