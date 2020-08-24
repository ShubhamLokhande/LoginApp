<template>
    <view class="row">
      <material-icon :name='icon' :color="color||'#777777'" :size='20'/>
      <text class="leftMargin" :style="{color:'#777777'}">{{text}}</text>
    </view>
</template>

<script>
export default {
  props:['icon','text','color']
}
</script>

<style scoped>
.row{
  flex-direction: row;
  margin-bottom: 10;
}
.leftMargin{
  margin-left: 20;
}
</style>