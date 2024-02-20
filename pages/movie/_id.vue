<template>
    <div>
        <HeaderBar></HeaderBar>
        <NuxtLink to="/"><i class="ri-arrow-left-double-line"></i></NuxtLink>
        
        <main v-if="movie">
            <div class="movie" >
            <figure>
                <img :src=" 'https://image.tmdb.org/t/p/original'+movie.backdrop_path" alt="" width="600" height="400">
            </figure>
        </div>
            <div class="movie details">
                <div class=""><h2 class="title">{{movie.title}}</h2></div>
                <div class=""><h5 class="release_date">Date: {{ movie.release_date }}</h5></div>
                <div class=""><i class="ri-star-fill"></i> {{ movie.vote_average }} </div>
                <div><h5 class="overview">Overview: {{ movie.overview }}</h5></div>
            </div>
           
        </main>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'; 

    export default {
        name:'movieDetails',
        // props: ['id'],
        computed:{
            ...mapGetters({
            movie: 'getData'
            })
        },
        mounted(){
            // this.$store.dispatch('fetchMovie', this.$router.id)
            this.$store.dispatch('fetchMovie',this.$route.params.id);
        }
    }
</script>

<style scoped>
  a, a:visited {
        text-decoration: none;
        color: black;
    }
    a:hover{
        cursor: pointer;
    }
    a:active{
        text-decoration: underline;
    }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        .movie{
            display: flex;
            justify-content: center;
            /* border: 1px solid red; */
            width: 55%;
        }
        .movie.details{
            width: 45%;
            justify-content: left;
            display: flex;
                flex-direction: column;
            div{
                display: flex;
                flex-direction:row;
            }
        }
    }
        figure{
            /* border: 1px solid red; */
            background-color: bisque;
            /* width: 600px;
            height: 400px; */
        }
</style>