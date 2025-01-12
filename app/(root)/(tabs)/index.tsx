import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-background-main">
      {/* Title Section */}
      <Text className="text-6xl font-montserrat color-text-primary text-center mt-8">
        Neuron Dice
      </Text>

      {/* Links Section */}
      <View className="flex-1 justify-center items-center">
        <Link
          className="text-4xl font-montserrat bg-button-background color-button-text px-4 py-2 rounded-lg mb-4"
          href="/sign-in"
        >
          Sign-In Page
        </Link>
        
      </View>
    </View>
  );
}