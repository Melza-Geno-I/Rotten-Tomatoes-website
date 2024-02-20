<template>
    <div>
        <HeaderBar></HeaderBar>
        <MoviesList></MoviesList>
        
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
   
</style>