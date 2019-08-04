<template>
  <v-bottom-navigation
    :value="activeBtn"
    fixed
    grow
    color="light-blue accent-4"
  >
    <v-btn to='/index'>
      <span>首页</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn to='/family'>
      <span>家人</span>
      <v-icon>mdi-clock-outline</v-icon>
    </v-btn>

    <v-btn to="/service">
      <span>服务</span>
      <v-icon>mdi-room-service-outline</v-icon>
    </v-btn>
    <v-btn to='/mine'>
      <span>我的</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
        data: ()=>({
            activeBtn: 0
        }),
        mounted(){
            console.log(this.$router)
        }
       
    }
</script>

<style lang="scss" scoped>

</style>


