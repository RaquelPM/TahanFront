<template>
  <div class="w-100">
    <div class="w-100 bordinha"></div>
    <navbar/>
    <router-view/>
    <div class="w-100 bordinha fixed-bottom"></div>
  </div>
</template>

<script>
  import navbar from '@/components/navbar.vue'

  export default{
    components:{
      navbar,
    }
  }
</script>
