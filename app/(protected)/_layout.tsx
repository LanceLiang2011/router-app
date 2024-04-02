import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]" options={{ headerBackTitle: "List" }} />
    </Stack>
  );
};

export default Layout;
