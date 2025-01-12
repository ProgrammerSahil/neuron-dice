import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ImageBackground 
      source={require('../../../assets/images/background.jpg')} 
      className="flex-1" 
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View className="absolute inset-0 bg-black/70" />
      
      <View className="flex-1">
        {/* Title Section */}
        <Text className="text-6xl font-montserrat color-text-primary text-center mt-20 pt-12 relative z-10">
          Neuron Dice
        </Text>
        {/* Links Section */}
        <View className="flex-1 justify-center items-center relative z-10">
          <Link
            className="text-4xl font-montserrat bg-button-background color-button-text px-4 py-2 rounded-lg mb-4"
            href="/sign-in"
          >
            Sign-In Page
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}