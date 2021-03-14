<template>
  <div id="app">
    <router-link  to="/">Home</router-link>
    <router-link  to="/blendMode">BlendyMode</router-link>
    <router-link  to="/parallex">Parallex</router-link>
    <router-link  to="/finalParallex">final</router-link>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
