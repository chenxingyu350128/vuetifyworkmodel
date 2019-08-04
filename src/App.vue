<template>
  <v-app>
    <v-content class="vContent">
      <router-view></router-view>
      <bottomNav/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import bottomNav from './components/public/bottomNav'
export default {
  name: 'App',
  components: {
    HelloWorld,
    bottomNav
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  .vContent{
    height: 100vh;
  }
</style>
