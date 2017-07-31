<template>
    <li class="am-g am-list-item-desced pet_list_one_block">
        <div class="pet_list_one_info">
            <div class="pet_list_one_info_tytj">
                <i class="iconfont-db pet_more_list_block_line_ico pet_list_tytj_ico" style="color:rebeccapurple;font-size:1.2em">&#xe61d;</i>即将上映</div>
            <div class="pet_list_one_info_r">
                <div class="pet_list_tag pet_list_tag_kty">电影</div>
            </div>
        </div>
        <div class=" am-list-main">
            <ul data-am-widget="gallery" class="am-gallery am-avg-sm-3   am-avg-md-3 am-avg-lg-3 am-gallery-default pet_list_one_list pet_list_one_tytj am-no-layout">
                <li v-for="item in SoonData">
                    <div class="am-gallery-item">
                        <router-link :to="'/movie/detail/'+item.id">
                            <img :src="item.images.large " :alt="item.title ">
                            <h3 class="p-center ">{{item.title}}</h3>
                            <b class="b-center ">评分：
                                <span>{{item.rating.average}}</span>
                            </b>
                        </router-link>
                    </div>
                </li>
    
            </ul>
        </div>
    </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            SoonData: [],
        }
    }, mounted() {
        this.getSoon()
    }, methods: {
        getSoon() {
            var _this = this
            this.$http.get('/api/movie/coming_soon?count=6').then(function (res) {
                _this.SoonData = res.data.subjects
                //请求成功 发送成功状态
                _this.$store.dispatch('success')
            }).catch(function () {//失败则是失败状态
                _this.$store.dispatch('error')
            })
        }
    }
}
</script>

<style scoped>
.pet_content_main .am-list>li a {
    width: 100%
}

.am-gallery-default .am-gallery-item img {
    height: 200px
}

.p-center {
    text-align: center;
    font-size: 15px;
    color: #222;
    padding: 5px 0px;

    max-width: 145px;
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
    overflow: hidden;
}

.pet_list_one_list li {
    margin-bottom: 15px
}

.b-center {
    text-align: center;
    font-size: 13px;
    color: #333;
    display: block;
    font-weight: normal
}
</style>
