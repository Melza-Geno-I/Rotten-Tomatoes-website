<template>
    <div class="container">
        <div class="container-flex">
            <HeaderBar></HeaderBar>
            <SubHeader></SubHeader>
            <Carousel></Carousel>
            <MoviesList></MoviesList>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'index',
        computed:{
            ...mapGetters({
                movies: 'getMovies'
            })
        }
        
    }
</script>

<style scoped>
   .container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#F3F3F3;
   }
   .container-flex{
    width: 95%;
    background-color: white;
   }
</style>