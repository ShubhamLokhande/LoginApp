<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
import Navigation from './Navigation'
import Vue from 'vue-native-core'
import { VueNativeBase } from 'native-base'
import store from './store'
import Vuelidate from 'vuelidate'
import InputWithError from './components/InputWithError'
import IconText from './components/IconText'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

Vue.use(VueNativeBase)
Vue.use(Vuelidate)

Vue.component('InputWithError', InputWithError)
Vue.component('IconText', IconText)
Vue.component('material-icon', Icon)
Vue.prototype.$store = store

export default {
  components:{
    Navigation
  }
}
</script>

<style scoped>
.container {
  flex: 1;
}
</style>