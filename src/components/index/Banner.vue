<template>
    <div data-am-widget="slider" class="am-slider am-slider-a1">
        <ul class="am-slides">
             <li v-for="item in bannerImg">
                 <router-link :to="'/article/hd/'+item.id">
                <img :src="item.image_lmobile">
                <div class="pet_slider_font">
                    <span class="pet_slider_emoji"> {{item.title}}</span>
                    <span>{{item.content | zslang}}</span>
                </div>
                <div class="pet_slider_shadow"></div>
                </router-link>
            </li> 
                  <!-- <li>
            <img src="/src/assets/img/fl01.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
                <span>“大白”有望成为现实：充气机器人研究取得进展</span>
            </div>
            <div class="pet_slider_shadow"></div>
      </li>
      <li>
            <img src="/src/assets/img/fl02.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> []~(￣▽￣)~*　</span>
                <span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
            </div>
            <div class="pet_slider_shadow"></div>
      </li>
      <li>
            <img src="/src/assets/img/fl03.png">
            <div class="pet_slider_font">
                <span class="pet_slider_emoji"> (｡・`ω´･)　</span>
                <span>《星际争霸2:虚空之遗》国服过审!</span>
            </div>
            <div class="pet_slider_shadow"></div>
      </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bannerImg: []
        }
    },
    mounted() {
       this.getBanner()
    },
    methods: {
        getBanner() {
            let _this = this
            this.$http.get('/api/event/list?loc=108289&count=5').then(function (res) {
                console.log(res.data.events)
                _this.bannerImg = res.data.events
            })
        }

    }, updated() {
        $('.am-slider').flexslider();
    }, filters: {
        zslang: function (value) {
            return value.substr(0, 15) + '...';
        }
    }
}
</script>
<style scoped>
.am-slider .am-slides img {
    max-height: 250px;
    margin: 0 auto
}

</style>


