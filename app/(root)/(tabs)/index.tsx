import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className="text-4xl p-2" href="/sign-in">Sign-In Page</Link>
      <Link className="text-4xl p-2" href="/preferences">prefrences</Link>
    </View>
  );
}
