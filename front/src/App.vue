<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    appNavBar: NavBar,
  },
};
</script>
