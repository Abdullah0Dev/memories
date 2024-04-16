import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { useForm } from '../context/FormContext'

const Form = () => {
    const { dispatch } = useForm()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState(null)
    const [edit, setEdit] = useState(false)  
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const memory = { title, image, desc }

        const response = await fetch('http://10.0.2.2:4000/api/memories/', {
            method: 'POST',
            body: JSON.stringify(memory),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)  
            setTitle('')
            setImage('')
            setDesc('')
            router.back()
            dispatch({ type: 'ADD_MEMORIES', payload: json })
        }

    }
    // If it is for Editing
    if(edit){
        setTitle(title)
        setImage(image)
        setDesc(desc)
    }
    

    return (
        <View className='  w-full h-full px-5 py-5 flex items-center justify-center  '>
            <View className='bg-white/20  w-full h-full  rounded-2xl '>

                {/* Head */}
                <View className='mt-2 ml-3'>
                    <Text className='text-white text-2xl font-bold'>Create A new Blog...</Text>
                </View>
                {/* Form */}
                <View className='flex-col gap-y-12 mt-12'>
                    <TextInput
                        onChangeText={(text) => setTitle(text)}
                        value={title}
                        className='h-12 mx-3 px-2 rounded-xl font-medium leading-8 text-base bg-white/50 '
                        placeholder='Title'
                        placeholderTextColor={'#3d3d3d'}

                    />
                    <TextInput
                        onChangeText={(text) => setImage(text)}
                        value={image}
                        className='h-12 mx-3 px-2 rounded-xl font-medium leading-8 text-base bg-white/50 '
                        placeholder='Image'
                        placeholderTextColor={'#3d3d3d'}

                    />
                    <TextInput
                        value={desc}
                        onChangeText={(text) => setDesc(text)}
                        className='h-[40%] mx-3 px-2 rounded-xl font-medium leading-8 text-base bg-white/50 '
                        placeholder='Description....'
                        placeholderTextColor={'#3d3d3d'}

                    />
                </View>
                <Pressable
                    onPress={handleSubmit}
                    className='h-12 mx-16 px-2 rounded-xl font-medium   leading-8 text-base bg-green-300 '

                >
                    <Text className='text-xl  font-bold  text-white  text-center mt-3 '>
                        {edit ? 'Update' : 'Add New Post'}
                    </Text>
                </Pressable>
                {error && <View className="error"><Text>{error}</Text></View>}
            </View>
        </View>
    )
}

export default Form