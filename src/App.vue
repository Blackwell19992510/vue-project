<script setup>
import navbar from './components/navbar.vue';
import footer from './components/footer.vue';
import landingpage from './components/landingpage.vue';

</script>

<template>
  <v-app>
    <navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer/>
  </v-app>
</template>

<script>
  export default {
  name: 'App',
  components: {
    landingpage,
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
    background-color:rgb(34,139,34,0.1) ;
    display: flex;
    align-items: center;
    justify-content: center;
}
.apply h1{
    font-size: 70px;
    color:black;
}
.apply h1 span{
    color:#1BCB18;
}
.button{
    background-color:lightskyblue;
    padding: 10px 10px;
    border-radius: 50px;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    margin-top: 20%;
}
</style>

