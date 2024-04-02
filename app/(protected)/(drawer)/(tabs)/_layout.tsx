import { Link, Slot, Tabs, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Alert, TouchableOpacity } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

const ProtectedLayout = () => {
  const segments = useSegments();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { display: segments[4] ? "none" : "flex" },
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.white,
        headerRight: () => (
          <Link href={`/`} replace asChild>
            <TouchableOpacity>
              <Ionicons name="exit-outline" size={24} color={Colors.white} />
            </TouchableOpacity>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerLeft: () => <DrawerToggleButton tintColor={Colors.white} />,
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          title: "Alert",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="warning" size={32} color={`red`} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert("This is an custom action");
          },
        })}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default ProtectedLayout;
