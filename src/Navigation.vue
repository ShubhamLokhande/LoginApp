<template>
  <root>
    <AppNavigation/>
  </root>
</template>

<script>
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import { Root } from 'native-base'

import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'vue-native-router'
import LoginScreen from './screens/LoginScreen'

const AuthStack = createStackNavigator(
{
  Login: LoginScreen
},
{   
  headerMode: 'none',
  initialRouteName: 'Login'
})
const Navigation = createDrawerNavigator({
  Home: HomeScreen,
  AboutUs: AboutScreen
})

const AppNavigation = createAppContainer(createSwitchNavigator({
  Auth: AuthStack,
  App: Navigation
}))

export default {
  components: { 
    Root, AppNavigation
  }
}
</script>