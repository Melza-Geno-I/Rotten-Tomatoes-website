<template>
        <el-row>
            <el-col :span="12">
                <div class="grid-content-1 ">
                    <el-carousel :interval="3000" arrow="always" indicator-position="none">
                        <el-carousel-item v-for="(item, index) in movies" :key="index">
                                <el-image class="carousel-img"  :src="'https://image.tmdb.org/t/p/original'+item.backdrop_path" alt="" fit="contain" ></el-image>
                        </el-carousel-item>
                </el-carousel>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content-2 "> 
                    <el-image :src="img1" fit="cover" style="width: 280px; height: 300px"></el-image>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content-2 "> 
                    <el-image :src="img2" fit="cover" style="width: 280px; height: 300px"></el-image>
                </div>
            </el-col>
        </el-row>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'Carousel',
        data(){
            return{
                img1:"https://resizing.flixster.com/5Kc3700RkCLSC56zRA0XrQIXaDo=/540x610/v2/https://images.fandango.com/cms/assets/13b63e60-0a0c-11ee-a868-adceb8892ad3--oppenheimer.jpeg",
                img2:"https://resizing.flixster.com/CvwOPUPCZBIpK5FUx0rnHlTOszA=/540x610/v2/https://images.fandango.com/cms/assets/e5fdfaf0-8d54-11ed-83f2-4f600722b564--dailytomato-spotlight.jpg"
            }
        },
        computed:{
            ...mapGetters({
            movies: 'getMovies'
        })
        }
    }
</script>

<style lang="scss" scoped>
.el-row{
    height: 300px;
    width:100%;
    display: flex;
    align-items: right;
    justify-content: center;
}

.grid-content-1{
    height: 300px;
    background-color: grey;
}
.grid-content-2{
    width: calc(100%/2);
    height: 300px;
}

</style>