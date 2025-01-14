import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <ImageBackground
    source={require('../../../assets/images/signinbackground.jpg')}
    resizeMode="cover"
      blurRadius={4} 
    >
    <SafeAreaView className="h-full">

      <Text className='color-text-primary text-center mt-20 text-5xl font-josefinSans font-semibold'>Sign In</Text>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default SignIn