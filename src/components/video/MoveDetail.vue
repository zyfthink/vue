<template>
    <div class="pet_mian">
        <div class="pet_head">
            <header data-am-widget="header" class="am-header am-header-default pet_head_block">
                <div class="am-header-left am-header-nav ">
                    <a @click="goback()" class="iconfont pet_head_jt_ico">&#xe601;</a>
                </div>
                <span class="headertitle">{{Mdetail.title}}</span>
            
            </header>
        </div>
        <div class="pet_content">
            <div class="pet_content_block">
                <article data-am-widget="paragraph" class="am-paragraph am-paragraph-default pet_content_article" data-am-paragraph="{ tableScrollable: true}">
                    <h1 class="pet_article_title">{{Mdetail.title}}</h1>
                    <div class="pet_article_user_time">又名：
                        <span v-for="item in Mdetail.aka">{{item}}、</span>
                    </div>
                    <img :src="img" />
    
                    <p class=paragraph-default-p>{{Mdetail.summary}}</p>
                    <p>
                        <blockquote>
                            <p>导演：
                                <span v-for="item in Mdetail.directors">{{item.name}}</span>
                            </p>
                        </blockquote>
                    </p>
                    <p>
                        <blockquote>
                            <p>领衔主演：
                                <span v-for="item in Mdetail.casts">{{item.name}}、</span>
                            </p>
                        </blockquote>
                    </p>
    
                </article>
                <ul class="like_share_block">
                    <li>
                        <a class="link_share_button" href="###">
                            <i class="iconfont-db share_ico_link">&#xe60c;</i>{{Mdetail.collect_count}}看过</a>
                    </li>
                    <li>
                        <a class="link_share_button" href="###">
                            <i class="iconfont-db share_ico_wx">&#xe63b;</i>{{Mdetail.wish_count}}想看</a>
                    </li>
                    <li>
                        <a class="link_share_button" href="###">
                            <i class="iconfont-db share_ico_pyq">&#xe856;</i>评分{{rating}}</a>
                    </li>
                </ul>
                <div style="height:50px"></div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            Mdetail: [],
            img: '',
            rating: ''
        }
    },
    mounted() {
        this.getMdetail()
    },
    methods: {
        getMdetail() {
            const _this = this;
            const reg = /\d\d{0,}/
            const id = this.$route.path.match(reg)[0];
            this.$http.get('/api/movie/subject/' + id + '').then(function (res) {
                console.log(res.data)
                _this.Mdetail = res.data
                _this.img = res.data.images.large
                _this.rating = res.data.rating.average
            })
        },
        goback() {
            this.$router.goBack()
        }
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

