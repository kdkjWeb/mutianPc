<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
	width: 100%;
	height: 100%;
}
#app{
	width: 100%;
	height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
ul,ol{
  list-style: none;
}
img{
  border: none;
}
a{
  text-decoration: none;
}
input{
  outline: none;
}
</style>
