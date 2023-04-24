import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative" >
    {/* first section */}
        <View className="flex-row px-6 mt-8 items-center space-x-2" >
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center" >
                <Text className="text-[#00bcc9] text-xl font-semibold">Swag</Text>
            </View>
            <Text className="text-[#2a2b4b] text-3xl font-semibold">Travels</Text>
        </View>

        {/* second section */}
        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#3c6072] text-[42px]">Your Journey Starts Here</Text>
            <Text className="text-[#00bcc9] text-[38px] font-bold">Good Moments</Text>
            <Text className="text-[#3c6072] text-base">Lorem ipsum dolor sit amet gfjyut gjdyrdt gduyrter gstd </Text>
        </View>
        {/* circle section */}
        <View className="w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
    </SafeAreaView>
  )
}

export default HomeScreen