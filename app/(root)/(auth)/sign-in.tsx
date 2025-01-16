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

      <Text className='color-text-primary text-center mt-20 text-5xl font-josefinSans font-bold'>Sign In</Text>
      <Text className="text-center mt-14 color-text-secondary font-josefinSans text-3xl ">Interesting articles for you{"\n"}</Text>
      <Text className='text-center color-text-secondary font-josefinSans text-3xl'>From all over the <Text className='font-bold'>internet</Text></Text>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default SignIn