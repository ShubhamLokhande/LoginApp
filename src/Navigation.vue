<template>
  <app-navigator/>
</template>

<script>
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

import {
  createAppContainer,
  createDrawerNavigator
} from 'vue-native-router'

const Navigation = createDrawerNavigator({
  Home: HomeScreen,
  'About Us': AboutScreen
})

const AppNavigator = createAppContainer(Navigation)

export default {
  components: { 
    AppNavigator 
  }
}
</script>