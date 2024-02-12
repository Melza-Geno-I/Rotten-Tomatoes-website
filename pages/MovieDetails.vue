<template>
    <div>
        <figure>
            <!-- <img :src=" 'https://image.tmdb.org/t/p/original'+movie.backdrop_path" alt=""> -->
        </figure>
        <h2 class="title">{{movie.title}}</h2>
        <h5 class="release_date">{{ movie.release_date }}</h5>
        <h6 class="overview">{{ movie.overview }}</h6>
    </div>
</template>

<script>
    export default {
        name:'MovieDetails',
        
    }
</script>

<style scoped>

</style>