import {View, Text,ScrollView, SafeAreaView} from 'react-native'
import { useState } from 'react'
import {Stack, useRouter} from 'expo-router' 

import Dummy from '../components/login/Dummy';

// The below snippet also multiple nativewind classes to be applied
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
const router = useRouter();

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <Stack.Screen
                options={{
                    headerTitle:''
                }}
            />

            <ScrollView >
                <View className="flex-1">
            
                {/* Dummy Can be removed, just used for Demo */}
                <Dummy />          

                </View>
            </ScrollView>
        </SafeAreaView>

    )

}

export default Home;