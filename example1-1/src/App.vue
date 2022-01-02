<template>
  <div id="nav">
    <router-link to="/">主页</router-link><p>|</p>
    <router-link to="/news">学校新闻</router-link><p>|</p>
    <router-link to="/institution">学校机构</router-link><p>|</p>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 6px dashed rgb(126, 8, 96);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    // margin-left: 200px;

    &.router-link-exact-active {
      color: #42b983;
      // margin-left:20px ;
    }
  }

  p {
    display: inline;
    margin-left: 150px;
    margin-right: 150px;
  }

}
</style>
