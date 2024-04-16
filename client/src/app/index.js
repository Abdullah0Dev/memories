import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Post } from '../components';
const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView className='h-full bg-blue-500 w-full'>    
      <Navbar />
                   
        <Post /> 
      <TouchableOpacity
        onPress={() => router.push('/form')}
        className='absolute bg-white  w-full h-32 bg-fixed bottom-0 items-center self-center'>
        <View className='bg-blue-300 p-3 rounded-full mt-9'>
          <Feather name="plus" size={37} color="white" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home


const Navbar = () => {
  return (
    <View className='flex-row  items-center justify-between mx-5'>
      <Text className='text-xl font-bold text-white'>Navbar</Text>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png' }}
        className='w-10 h-10'
      />
    </View>
  )
}