<template>
  <div class="footer-con">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-con{
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding:4px 12px;
  box-sizing: border-box;
}
</style>