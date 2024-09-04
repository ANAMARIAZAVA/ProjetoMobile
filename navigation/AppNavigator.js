import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from '../pages/loginScreen';
import homeScreen from '../pages/homeScreen';
import perfilScreen from '../pages/perfilScreen';
import produtoScreen from '../pages/produtoScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={loginScreen} />
                <Stack.Screen name="Home" component= {homeScreen}/>
                <Stack.Screen name="Perfil" component={perfilScreen} />
                <Stack.Screen name="Produto" component={produtoScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}