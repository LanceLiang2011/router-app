import { Stack } from "expo-router";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListLayout = () => {
  return (
    <Stack
      screenOptions={{
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
      <Stack.Screen name="index" options={{ title: "List" }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
};

export default ListLayout;
