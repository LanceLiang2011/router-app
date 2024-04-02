import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ListIndexScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={`/(protected)/(drawer)/(tabs)/list/${43}?foo=sanity`}>
        {43}
      </Link>
      <Link href={`/(protected)/(drawer)/(tabs)/list/${55}?foo=crazy`}>
        {55}
      </Link>
      <Link href={`/(protected)/details/${999}`}>{999}</Link>
    </View>
  );
};

export default ListIndexScreen;

const styles = StyleSheet.create({});
