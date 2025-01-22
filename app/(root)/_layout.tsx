import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

 export default function AppLayout(){
    const {loading, isLoggedin} = useGlobalContext();

    if(loading){
        return(
            <SafeAreaView>
                <ActivityIndicator className="text-primary-300 h-full flex justify-center items-center" size="large" />
            </SafeAreaView>
        )
    }

    if(!isLoggedin) return <Redirect href='/sign-in' / >

    return <Slot />
 }