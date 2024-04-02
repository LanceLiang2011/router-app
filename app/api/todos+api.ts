import { ExpoRequest, ExpoResponse } from "expo-router/server";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function GET(request: ExpoRequest) {
  const token = request.headers.get("Authorization");

  if (!token)
    return new ExpoResponse("No Authorization", {
      status: 401,
      headers: {
        "Content-Type": "text/plain",
      },
    });

  const response = await fetch(`${API_URL}/todos`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();
  if (!response.ok)
    return new ExpoResponse(json.message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });

  return ExpoResponse.json(json);
}
