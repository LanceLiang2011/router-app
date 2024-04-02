import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Colors } from "@/constants/Colors";
import { ActivityIndicator } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const { initialized, token } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const isInProtectedRoute = segments[0] === "(protected)";
    if (!initialized) return;
    // console.log(isInProtectedRoute); //FIXME:
    if (token && !isInProtectedRoute) {
      router.replace(`/(protected)/(drawer)/(tabs)`);
    } else if (!token && isInProtectedRoute) {
      router.replace(`/`);
    }
  }, [segments, token, router]);

  if (!initialized) return <ActivityIndicator />;

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: Colors.white,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="register"
          options={{ title: "Create Account", headerBackTitle: "Log In" }}
        />
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
