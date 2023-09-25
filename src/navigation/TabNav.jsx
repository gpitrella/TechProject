
import React from "react";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigation from "./RootNavigation";
import Profile from "../screens/Profile";

import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TabNav = () => {

    const styles = StyleSheet.create({
        containerTab: {
          paddingHorizontal: 50,
          marginHorizontal: 80,
          marginVertical: 80,
          },
      });
      
  return (
    <Tab.Navigator  screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="shop"
              size={focused ? 30 : 28}
              color={focused ? colors.mediumBlue : "black"}
            />
          ),
        }}
        name="rootNavigation"
        component={RootNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={focused ? 30 : 28}
              color={focused ? colors.mediumBlue : "black"}
            />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNav;