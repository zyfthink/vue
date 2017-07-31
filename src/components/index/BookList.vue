<template>
    <div class="pet_content_main">
        <div data-am-widget="list_news" class="am-list-news am-list-news-default">
            <div class="am-list-news-bd">
                <ul class="am-list">
                    <!--缩略图在标题右边-->
                    <li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block" v-for="(item,index) in bookdata">
                        <router-link :to="'/article/hd/'+index">
                            <div class="pet_list_one_info ">
                                <div class="pet_list_one_info_l ">
                                    <div class="pet_list_one_info_ico " style="background: #fe9700;border-radius: 50%;text-align: center;">
                                        <i class="iconfont-db" style="color:#fff">&#xe618;</i>
                                    </div>
                                    <div class="pet_list_one_info_name ">{{item.src}}</div>
                                </div>
                                <div class="pet_list_one_info_r ">
                                    <div class="pet_list_tag pet_list_tag_xxs ">{{item.category}}</div>
                                </div>
                            </div>
                            <div class=" am-u-sm-8 am-list-main pet_list_one_nr ">
                                <h3 class="am-list-item-hd pet_list_one_bt ">
                                    <a href="### " class=" ">{{item.title}}</a>
                                </h3>
                                <div class="am-list-item-text pet_list_one_text " v-html="zslang(item.content)"></div>
    
                            </div>
                            <div class="am-u-sm-4 am-list-thumb ">
                                <a href="### " class=" " v-if="item.pic!=''">
                                    <img :src="item.pic " class="pet_list_one_img " alt=" " />
                                </a>
                                <a href="### " v-else>
                                    <img src="/src/assets/img/noImg.jpg" alt="">
                                </a>
                            </div>
                        </router-link>
                    </li>
    
                    <!-- <li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">
                                       <router-link :to="'/article/hd/1'">
                    <div class="pet_list_one_info">
                        <div class="pet_list_one_info_l">
                            <div class="pet_list_one_info_ico"><img src="/src/assets/img/a1.png" alt=""></div>
                            <div class="pet_list_one_info_name">Super invincible 菁 </div>
                        </div>
                        <div class="pet_list_one_info_r">
                            <div class="pet_list_tag pet_list_tag_xxs">新鲜事</div>
                        </div>
                    </div>
                    <div class=" am-u-sm-8 am-list-main pet_list_one_nr">
                        <h3 class="am-list-item-hd pet_list_one_bt"><a href="###" class="">十一长假哪也不去，宅在家里看电影！</a></h3>
                        <div class="am-list-item-text pet_list_one_text">每逢长假，总有那么一群人选择远离人山人海，静静地呆在家，坐在电脑电视前。长时间的工作学习让他们感觉很疲惫，对什么都提不起劲，打开电脑却不知道干什么好…</div>
            
                    </div>
                      <div class="am-u-sm-4 am-list-thumb">
                        <a href="###" class="">
                          <img src="/src/assets/img/q1.jpg" class="pet_list_one_img" alt=""/>
                        </a>
                      </div>
                                       </router-link>
                  </li> -->
    
                </ul>
    
                <div class="am-modal-bd " v-show="loading " style="border-bottom:0px ">
                    <span class="am-icon-spinner am-icon-spin am-icon-lg "></span>
                </div>
    
            </div>
        </div>
    
    </div>
</template>
<script >
export default {
    data() {
        return {
            bookdata: [],
            loading: true
        }
    },
    mounted() {
        this.getBook()
    },
    methods: {
        getBook() {
            let _this = this;
            let sw = true;
            let start = 5;
            let cid=1;
            this.$http.get('/jdapi/get?channel=头条&num=10&start=0&appkey=bed9836b04b89e3e9847f4b0530e36bd').then(function (res) {
                console.log(res.data.result.result.list)
                _this.bookdata = res.data.result.result.list;
                _this.loading = false
            })
             // 注册scroll事件并监听  
            window.addEventListener('scroll', function () {
                //console.log(document.documentElement.clientHeight + '-----------' + window.innerHeight); // 可视区域高度  
                // console.log(document.body.scrollTop); // 滚动高度  
                // console.log(document.body.scrollHeight); // 文档高度  
                // 判断是否滚动到底部  
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight) {
                    // console.log(sw);  
                    // 如果开关打开则加载数据  
                    _this.loading = true
                    if (sw) {
                        start = start + 5;
                        // 将开关关闭  
                        sw = false;
                        _this.$http.get('/jdapi/get?channel=头条&num=5&start=' + start + '&appkey=bed9836b04b89e3e9847f4b0530e36bd')
                            .then(function (res) {
                                let p = res.data.result.result.list;
                                // 将新获取的数据push到vue中的data，就会反应到视图中了  
                                p.forEach(function (val, index) {
                                    _this.bookdata.push(val);
                                });
                                // 数据更新完毕，将开关打开  
                                sw = true;
                                _this.loading = false
                                
                             
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }
            });

        },
        zslang: function (value) {
            return value.substr(0, 80) + '...';
        }
    },
    updated() {
      
        // 动态计算新闻列表文字样式
        auto_resize();
        $(window).resize(function () {
            auto_resize();
        });
        $('.am-list-thumb img').load(function () {
            auto_resize();
        });

        $('.am-list > li:last-child').css('border', 'none');

        function auto_resize() {
            $('.pet_list_one_nr').height($('.pet_list_one_img').height());

        }
    }
}
</script>