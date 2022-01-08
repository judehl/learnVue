<template>
  <div class="header">
    xx管理系统
  </div>
  <div class="content left">
      <ul>
        <li><router-link to="/users">用户管理</router-link></li>
        <li><router-link to="/rights">权限管理</router-link></li>
        <li><router-link to="/goods">商品管理</router-link></li>
        <li><router-link to="/orders">订单管理</router-link></li>
        <li><router-link to="/settings">系统设置</router-link></li>
      </ul>
  </div>
  <div class="content right">
      <router-view></router-view>
  </div>
  <div class="footer">
    版权页
  </div>
</template>

<style lang="scss">
 * {
    margin: 0px;
    padding: 0px;
  }
  .header, .footer {
            height: 50px;
            background-color: grey;
            color: white;
            font-size: 20px;
            text-align: center;
            line-height: 50px;
        }

  .content {
    height: 400px;
    float: left;
    width:500px;
  }
  .left {
    background-color: wheat;
    width: 200px;
  }
.left li {
  list-style: none;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-bottom: thistle;
  cursor: pointer;
}
.left li a{
  text-decoration-line: none;
}
.left li:hover {
  background-color: yellowgreen;
}

.footer {
  clear: both;
}
</style>
