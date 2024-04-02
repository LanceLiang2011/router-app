import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const SettingScreen = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View>
      <Button title="Open Drawer" onPress={openDrawer} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
