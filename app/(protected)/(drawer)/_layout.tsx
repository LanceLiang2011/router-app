import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Colors } from "@/constants/Colors";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: Colors.white,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{ drawerLabel: "Home", headerShown: false }}
        />
        <Drawer.Screen name="settings" options={{ title: "Settings" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
