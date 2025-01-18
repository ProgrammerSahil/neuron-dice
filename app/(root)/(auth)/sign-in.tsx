import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  const handleLogin = () => {

  }
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

      <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full  py-4 mt-20 mx-20'>
        <View className='flex flex-row items-center justify-center'>
        <Image src={"https://cdn-teams-slug.flaticon.com/google.jpg"} className="w-9 h-9 mr-2" resizeMode='contain' />
          <Text className='text-xl font-montserrat font-bold'>Continue with Google</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
    </ImageBackground>
  )
}

export default SignIn