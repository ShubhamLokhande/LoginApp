<template>
  <ScreenDrawer :navigation="navigation" :headerTitle="title">
    <view>
      <text>{{title}}</text>
    </view>
  </ScreenDrawer>
</template>

<script>
import ScreenDrawer from '../components/ScreenDrawer'

export default {
  components:{
    ScreenDrawer
  },
  data(){
    return {
      title: 'Home Screen'
    }
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods:{
    
  }
}
</script>