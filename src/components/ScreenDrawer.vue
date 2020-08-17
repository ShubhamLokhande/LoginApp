<template>
  <nb-container>
    <nb-header>
      <nb-left class="hello">
        <nb-button transparent :on-press="toggleDrawer">
          <nb-icon name="menu"/>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{headerTitle}}</nb-title>
      </nb-body>
    </nb-header>
    <slot/>
  </nb-container>
</template>

<script>
import { DrawerActions } from 'react-navigation-drawer'

export default {
  props:{
    headerTitle:{
      type: String,
      required: true
    },
    navigation:{
      type: Object
    }
  },
  methods:{
    toggleDrawer(){
      this.navigation.dispatch(DrawerActions.toggleDrawer())
    }
  }
}
</script>

<style scoped>
.hello{
  max-width: 15%;
}
</style>