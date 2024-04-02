import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";

const ListDetailScreen = () => {
  const { id, foo } = useLocalSearchParams<{ id: string; foo?: string }>();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: `${id}` });
  }, [id, navigation]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`${id} --- ${foo ?? "Something to do"}`}</Text>
    </View>
  );
};

export default ListDetailScreen;

const styles = StyleSheet.create({});
