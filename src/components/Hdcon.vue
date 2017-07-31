<template>
  <!-- 活动内容 -->
  <div class="pet_mian">
    <div class="pet_head">
      <header data-am-widget="header" class="am-header am-header-default pet_head_block">
        <div class="am-header-left am-header-nav ">
          <a @click="goback()" class="iconfont pet_head_jt_ico">&#xe601;</a>
        </div>
        <span class="headertitle">{{HdData.title}}</span>
      </header>
    </div>
    <div></div>
  
    <div class="pet_content">
      <div class="pet_content_block pet_hd_con">
        <div class="pet_hd_con_head" v-if="HdData.pic!=''">
          <img :src="HdData.pic" alt="">
        </div>
        <div v-else style="display:none"></div>
        <article data-am-widget="paragraph" class="am-paragraph am-paragraph-default pet_content_article" data-am-paragraph="{ tableScrollable: true, pureview: true }">
          <h1 class="pet_article_title">{{HdData.title}}</h1>
          <div class="pet_article_user_time pet_hd_con_time">
            <i class="iconfont">&#xe617;</i>{{HdData.time}}</div>
          <div class="pet_article_user_time pet_hd_con_map">
            <i class="iconfont">&#xe632;</i>{{HdData.url}}</div>
          <div class="pet_article_user_time pet_hd_con_map">
            <i class="iconfont">&#xe615;</i>{{HdData.src}}</div>
  
          <div class="pet_hd_con_gp_list_nr">
            <p v-html="HdData.content">
            </p>
  
          </div>
  
        </article>
  
        <div style="height:50px"></div>
      </div>
  
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      HdData: []
    }
  }
  , mounted() {
    this.getHd()
  }, filters: {
    zslang: function (value) {
      return value.substr(0, 350) + '...';
    }
  },
  methods: {
    getHd() {
      var reg = /\d\d{0,}/
      var id = this.$route.path.match(reg)[0];
      var _this = this
      this.$http.get('/jdapi/get?channel=头条&num=40&appkey=bed9836b04b89e3e9847f4b0530e36bd').then(function (res) {
        _this.HdData = res.data.result.result.list[id];
      })

    },
    goback() {
      this.$router.goBack()
    }
  }
}
</script>

