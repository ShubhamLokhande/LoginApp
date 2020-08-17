<template>
  <view>
    <nb-item>
      <slot />
    </nb-item>
    <nb-text v-if="error" class="inputValidationError">{{msg}}</nb-text>
  </view>
</template>

<script>
export default {
  props:['error','msg']
}
</script>

<style scoped>
.inputValidationError{
  color: red;
  padding: 10;
  font-size: 14;
}
</style>