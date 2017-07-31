<template>
    <div class="pet_mian" id="top">
        <!-- banner -->
        <Banner></Banner>
        <!-- 首页图标导航 -->
        <Navicon></Navicon>
        <BookList></BookList>
    </div>
</template>
<script>
import Banner from './index/Banner.vue'
import Navicon from './index/Navicon.vue'
import BookList from './index/BookList.vue'
export default {
    components: {
        Banner,
        Navicon,
        BookList
    }

}
</script>

