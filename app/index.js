import {View, Text,ScrollView, SafeAreaView} from 'react-native'

import {Stack, useRouter} from 'expo-router' 


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
                    headerStyle:{backgroundColor:'white'},
                    headerShadowVisible:false,
                    headerTitle:''
                }}
            />

            <ScrollView >
                <View className="flex-1">
            
                {/* Dummy Can be removed, just used for Demo */}
                <Text className="text-red-600 text-xl text-center">Test Page</Text>     

                </View>
            </ScrollView>
        </SafeAreaView>

    )

}

export default Home;