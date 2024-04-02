import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
        }}
      />
      <Link href={`/register`} asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Register</Text>
        </TouchableOpacity>
      </Link>
      <Link href={`/privacy`} asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Privacy</Text>
        </TouchableOpacity>
      </Link>
      <Link href={`/(protected)/(drawer)/(tabs)`} replace asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>See content</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 100,
    objectFit: "contain",
  },
});
