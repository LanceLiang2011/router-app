import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const ListIndexScreen = () => {
  const { token } = useAuth();
  const [todos, setTodos] = useState();
  useEffect(() => {
    const loadTodos = async () => {
      const response = await fetch(`/api/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setTodos(json);
    };
    loadTodos();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{JSON.stringify(todos)}</Text>
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
