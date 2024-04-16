import { View, Text } from 'react-native'
import React from 'react'
import { Form } from '../components'
import { useLocalSearchParams } from 'expo-router'
const FormPage = () => {
 
  return (
    <View className='bg-blue-600 h-full'>
      <Form  />
    </View>
  )
}

export default FormPage