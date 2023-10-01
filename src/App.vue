<script setup>
import navbar from './components/navbar.vue';
import foot from './components/foot.vue';
import landingpage from './components/landingpage.vue';


</script>

<template>
  <v-app>
    <navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <foot/>
  </v-app>
</template>

<script>
  export default {
  name: 'App',
  components: {
    landingpage
  }
  }
</script>
<style>
  .image{
    object-fit: fill;
    display: flex;
    align-items: center;
    justify-content: center;
}
.apply{
    position: absolute;
    background-color:rgb(0,128,128,0.4) ;
    display: flex;
    align-items: center;
    justify-content: center;
}
.apply h1{
    font-size: 70px;
    color:white;
}

.button{
    background-color:teal;
    padding: 10px 10px;
    border-radius: 50px;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    margin-top: 20%;
    border: 2px solid #000000;
    display: block;
}
</style>

