<template>
    <div class="pet_mian">
        <div class="pet_head">
            <header data-am-widget="header" class="am-header am-header-default pet_head_block">
                <div class="am-header-left am-header-nav ">
                    <a @click="goback()" class="iconfont pet_head_jt_ico">&#xe601;</a>
                </div>
                <span class="headertitle">电影</span>
            </header>
        </div>
    
        <div class="pet_content pet_content_list">
            <div class="pet_article_like">
                <div class="pet_content_main pet_article_like_delete">
                    <div data-am-widget="list_news" class="am-list-news am-list-news-default am-no-layout">
                        <div class="am-list-news-bd">
                            <div class="am-modal-bd " v-show="loading " style="border-bottom:0px ">
                                <span class="am-icon-spinner am-icon-spin am-icon-lg "></span>
                            </div>
                            <ul class="am-list">
                                <Hoting v-show="isLoad"></Hoting>
                                <Soon v-show="isLoad"></Soon>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Hoting from './video/Hoting.vue'
import Soon from './video/Soon.vue'
export default {
   computed:mapGetters([
       'loading',
       'isLoad'
   ]),
    methods: {
        goback() {
            this.$router.goBack()
        }
    },
    components: {
        Hoting,
        Soon
    }
}
</script>

<style scoped>
.headertitle {
    color: #b7b7b7;
    font-size: 20px;
    text-align: center;
    position: absolute;
    left: 0px;
    right: 0px;
    z-index: 0;
    width: 300px;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

