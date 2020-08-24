<template>
  <root>
    <AppNavigation/>
  </root>
</template>

<script>
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ProfileScreen from './screens/ProfileScreen'
import { Root } from 'native-base'

import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'vue-native-router'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {   
    headerMode: 'none',
    initialRouteName: 'Login'
  }
)
const Navigation = createDrawerNavigator({
  Home: HomeScreen,
  AboutUs: AboutScreen,
  Profile: ProfileScreen
},{
  initialRouteName:'Profile'
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