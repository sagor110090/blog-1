<template>
    <div class="music" >
        <transition name="normal">
            <div class="music-show">
                <div class="music-header">
                    <switches :switches="switches" @switch="switchItem" :currentIndex="currentIndex"></switches>
                </div>
                <div class="main">
                    <local-music v-show="currentIndex === 0"></local-music>
                    <recommend v-show="currentIndex === 1"></recommend>
                    <rank v-show="currentIndex === 2"></rank >
                    <!-- <music-list class="music-list"></music-list>
                    <div class="current-music-info">
                        current-music
                    </div> -->
                </div>
            </div>
        </transition>
        <div class="music-cover">
            <img :src="currentSong.image" alt="">
        </div>
    </div>
</template>

<script>
import MusicList from 'base/music-list/music-list'
import Switches from 'base/switches/switches'
import LocalMusic from 'components/music-pages/local-music/local-music'
import Recommend from 'components/music-pages/recommend/recommend'
import Rank from 'components/music-pages/rank/rank'

import { mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return {
            switches:['本地歌单','推荐歌单','最新排行'],
            currentIndex: 0
        }
    },
    created(){
    },
    computed:{
        ...mapGetters([
            'currentSong'
        ])
    },
    methods:{
      switchItem(index){
        this.currentIndex = index
      },
      
    },
    components:{
        MusicList,
        Switches,
        LocalMusic,
        Recommend,
        Rank
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.music{
    margin-top 30px
    font-size $font-size-medium
    .music-show{
        height 520px
        margin: 0 7.5%;
        min-width 968px
        .main{
          .music-list{
            float left
            width 75%
          }
          .current-music-info{
            float left
            width 25%
            height 100%
            background-color rgba(150,0,0,0.5)
          }  
        }
    }
    .music-cover{
        img{
            position fixed
            top 0 
            left 0
            transform scale(1.5)
            z-index -30
            -webkit-filter blur(50px)
            -moz-filter blur(50px)
            -o-filter blur(50px)
            -ms-filter blur(50px)
            filter blur(50px)
            width 100%
            height 100%
        }
    }
}
</style>
