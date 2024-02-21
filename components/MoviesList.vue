<template>
    <div class="content">
        <section class="section1">
            <div class="heading">
                <h4>NEW & UPCOMING MOVIES IN THEATERS</h4>
                <a href="">VIEW ALL</a>
            </div>
            <!-- <MovieCart v-for="movie in movies" :key="movie.id" :movie="movie"></MovieCart> -->
            <ul class="movies">
                <!-- <NuxtLink :to="{name: 'MovieDetails', params:{id: movie.id}}" class="movie" v-for="movie in movies" :key="movie.id"> -->
                <NuxtLink :to="`/movie/${movie.id}`" class="movie" v-for="movie in movies" :key="movie.id">
                    <div class="movie-details">
                        <figure v-if="movie.poster_path">
                            <img :src=" 'https://image.tmdb.org/t/p/original'+movie.poster_path" width="180" height="250" alt="">
                        </figure>
                        <figcaption>
                            <div class="movie-rating">{{ movie.popularity }}<i class="ri-eye-line"></i></div>
                        <div class="movie-name">{{ movie.title }}</div>
                        </figcaption>
                    </div>
                    <button  @click="$store.commit('increment')"><i class="ri-add-circle-line">&nbsp;</i>WATCHLIST</button>
                </NuxtLink>
            </ul>


        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:"MoviesList",
        computed:{
            ...mapGetters({
            movies: 'getMovies'
        })
            // movies(){
            //     return this.$store.state.movies
            // }
        },
        mounted(){
            this.$store.dispatch('fetchMovies');
        }
    }
</script>

<style scoped>
.content{
    font-family: Roboto Condensed, sans-serif;
}
.heading{
    margin-top: 30px;
    font-weight: 900;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a, a:hover, a:visited{
        color:#2A62C2;
        font-size: 13px;
        font-weight: bold;
        text-decoration: none;
    }
    a:active{
        text-decoration: underline;
    }
}

.movies{
        margin: 0;
        display: flex;
        flex-direction: row;
        list-style: none;
        gap:2.5px;
        overflow: auto;
        font-family: Condensed, sans-serif;
        font-size: 13px;
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
        .movie{
            text-align: center;
            .movie-details{
                width: 180px;
                height: 330px;
                text-align: left;
                border-radius: 10%;

                figure{
                    border: 0.1px solid transparent ;
                    border-radius: 10%;

                    margin:0;

                    img{
                        object-fit: contain;
                    }
                }
                figcaption{
                    padding: 10px;
                    div{
                    padding: 5px;
                }
                } 
            }
            .movie-details:hover{
                cursor: pointer;
                figure{
                    filter: brightness(90%);
                }
                figcaption:hover{
                    color: #5384CA;

                }
            }
            button{

                border-radius:20px;
                outline:none;
                border:1px solid black;
                padding: 5px 15px;
                background-color: white;
            }
            button:hover{
                border: 1px solid grey;
                cursor: pointer;
            }
        }
}




</style>