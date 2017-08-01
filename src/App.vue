<template>
  <div id="app">
    <!-- 返回顶部按钮[[ -->
    <div data-am-widget="gotop" class="am-gotop am-gotop-fixed">
      <a href="#top" title="">
        <img class="am-gotop-icon-custom" src="./src/assets/img/goTop.png" />
      </a>
    </div>
    <!-- 返回顶部按钮]] -->
    <router-view></router-view>
  
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>



