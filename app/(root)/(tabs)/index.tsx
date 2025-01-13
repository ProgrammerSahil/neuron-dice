import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    
    <ImageBackground
      source={require('../../../assets/images/background.jpg')}
      className="flex-1"
      resizeMode="cover"
      blurRadius={4} 
    >
      
      {/* Dark overlay */}
      <View className="absolute inset-0 bg-black/70" />
      <View className="flex-1">
        {/* Title Section */}
        <Text className="text-6xl font-josefinSans font-bold color-text-primary text-center mt-20 pt-12 relative z-10">
          Neuron Dice
        </Text>
        
        {/* Subtitle */}
        <Text className="text-4xl font-josefinSans color-text-primary text-center p-20 relative z-10">
          random interesting articles from the internet
        </Text>

        {/* Links Section */}
        <View className="flex-1 justify-center items-center relative z-10">
          <Link
            className="text-4xl font-josefinSans font-bold bg-button-background color-button-text px-4 py-2 rounded-lg mb-40"
            href="/sign-in"
          >
            Sign-In Page
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}