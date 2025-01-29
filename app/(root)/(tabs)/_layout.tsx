import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: string; title: string }) => (
  <View>
    <Image 
      style={{ width: 30, height: 30, marginTop:25 }}  
      source={{ uri: icon }}  
      resizeMode="contain"
      tintColor={focused? '#0061ff': '#666876'} 
    />
  </View>
)

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          position: 'absolute',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              icon="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              focused={focused}
              title="home"
            />
          )
        }}
      />

<Tabs.Screen 
        name="preferences"
        options={{
          title: 'Preferences',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              icon="https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png"
              focused={focused}
              title="preferences"
            />
          )
        }}
      />

    </Tabs>
  )
}

export default TabsLayout