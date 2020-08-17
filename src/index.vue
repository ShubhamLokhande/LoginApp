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

Vue.use(VueNativeBase)
Vue.use(Vuelidate)

Vue.component('InputWithError', InputWithError)
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