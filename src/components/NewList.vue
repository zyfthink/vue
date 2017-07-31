<template>
    <div class="pet_mian">
        <div class="pet_head">
            <header data-am-widget="header" class="am-header am-header-default pet_head_block">
                <div class="am-header-left am-header-nav ">
                    <a @click="goback()" class="iconfont pet_head_jt_ico">&#xe601;</a>
                </div>
    
                <div class="am-header-right am-header-nav">
                    <a href="javascript:;" class="iconfont pet_head_gd_ico">&#xe600;</a>
                </div>
            </header>
        </div>
        <div class="pet_content pet_content_list">
            <div class="pet_article_like">
                <div class="pet_content_main pet_article_like_delete">
                    <div data-am-widget="list_news" class="am-list-news am-list-news-default am-no-layout">
                        <div class="am-list-news-bd">
                            <ul class="am-list">
                                <!--缩略图在标题右边-->
                                <li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">
                                    <div class="pet_list_one_info">
                                        <div class="pet_list_one_info_l">
                                            <div class="pet_list_one_info_ico">
                                                <img src="/src/assets/img/a1.png" alt="">
                                            </div>
                                            <div class="pet_list_one_info_name">Super invincible 菁 </div>
                                        </div>
                                        <div class="pet_list_one_info_r">
                                            <div class="pet_list_tag pet_list_tag_xxs">新鲜事</div>
                                        </div>
                                    </div>
                                    <div class=" am-u-sm-8 am-list-main pet_list_one_nr">
                                        <h3 class="am-list-item-hd pet_list_one_bt">
                                            <a href="###" class="">十一长假哪也不去，宅在家里看电影！</a>
                                        </h3>
                                        <div class="am-list-item-text pet_list_one_text">每逢长假，总有那么一群人选择远离人山人海，静静地呆在家，坐在电脑电视前。长时间的工作学习让他们感觉很疲惫，对什么都提不起劲，打开电脑却不知道干什么好…</div>
    
                                    </div>
                                    <div class="am-u-sm-4 am-list-thumb">
                                        <a href="###" class="">
                                            <img src="/src/assets/img/q1.jpg" class="pet_list_one_img" alt="" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    methods: {
        goback() {
            this.$router.goBack()
        }
    }
}
</script>
