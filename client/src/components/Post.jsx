import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import axios from 'axios'
import { addPost, getAllMemories } from '../../api/fetchFromAPI';
import { useForm } from '../context/FormContext';
import PostDetails from './PostDetails';



const Post = () => {
    const { memories, dispatch } = useForm()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://10.0.2.2:4000/api/memories/')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_MEMORIES', payload: json })
            }
        }
        fetchWorkouts()
    }, [dispatch])



    return (
        <View>
            <FlatList
                data={memories}
                renderItem={({ item }) => (
                    <PostDetails memories={memories} item={item} key={item?._id} />
                )}
            />

        </View>
    )
}

export default Post