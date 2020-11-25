<template>
  <div class="list-con">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.list-con{
  display: flex;
  flex-wrap: wrap;
}
</style>