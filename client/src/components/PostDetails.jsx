import { View, Text, Image, FlatList } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import axios from 'axios'
import { addPost, getAllMemories } from '../../api/fetchFromAPI';
import { useForm } from '../context/FormContext';
import { useRouter } from 'expo-router'

const PostDetails = ({ item }) => {
    const { memories, dispatch } = useForm()
    const router = useRouter()  
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

    const handleThumbsUp = () => {  
        setLike(prevLike => prevLike + 1)
    }
    const handleThumbsDown = () => {
        setDisLike(prevLike => prevLike + 1)
    }

    const handleDelete = async () => {
        const response = await fetch(`http://10.0.2.2:4000/api/memories/${memories[0]._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_MEMORIES', payload: json })
        }
    }
    const handleEdit = () => {
        router.push('form')
        console.log('Amazing');
    }  

 
    return (
        <View>
            <View className='flex bg-white/30 mt-8 rounded-xl mx-3 py-3'>
                {/* head post */}
                <View className='flex-row justify-between mt-1 mx-5'>
                    <Feather name="trash" size={24}
                        onPress={handleDelete}
                        style={{ backgroundColor: 'red', padding: 3, borderRadius: 5 }}
                        color="#ffffff9e" />
                    <Feather
                        onPress={handleEdit}
                        name="edit" size={24} color="black" />
                </View>
                <View className='ml-5 my-1'>
                    <Text className='text-black font-bold text-xl '>{item.title}</Text>
                </View>
                {/* body post */}
                <View className='ml-5 mr-2 '>
                    <Image
                        source={{ uri: `${item.image}` || 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg' }}
                        className='w-[100%] mt-3 h-60 rounded-md'
                    />
                    <Text className='mt-3 text-lg text-blue-50 '>{item.desc}</Text>
                </View>
                {/* Reactions */}
                <View className='flex-row mt-5 justify-between mx-14'>
                    <View className='flex-row'>
                        <FontAwesome onPress={handleThumbsUp} name="thumbs-o-up" size={28} color="black" />
                        <Text className='text-white px-2 rounded-xl bg-green-600 ml-1 text-base'>{like}</Text>
                    </View>
                    <View className='flex-row'>
                        <FontAwesome
                            onPress={handleThumbsDown}
                            name="thumbs-o-down" size={28} color="black" />
                        <Text className='text-white px-2 rounded-xl bg-green-600 ml-1 text-base'>{disLike}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default PostDetails