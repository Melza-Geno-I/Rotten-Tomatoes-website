<template>
    <div class="content">
        <section class="section1">
            <div class="heading">
                <h4>NEW & UPCOMING MOVIES IN THEATERS</h4>
                <a href="">VIEW ALL</a>
            </div>
            <!-- <MovieCart v-for="movie in movies" :key="movie.id" :movie="movie"></MovieCart> -->
            <ul class="movies">
                <NuxtLink to="/MovieDetails" class="movie" v-for="movie in movies" :key="movie.id" :movie="movie" >
                    <div class="movie-details">
                        <figure v-if="movie.backdrop_path">
                            <img :src=" 'https://image.tmdb.org/t/p/original'+movie.backdrop_path" width="180" height="250" alt="">
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
    export default {
        name:"MoviesList",
        components:{
            MovieDetails
        },
        computed:{
            movies(){
                return this.$store.state.movies
            }
        },
        mounted(){
            this.$store.dispatch('getMovies');
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
        gap:10px;
        /* border: 1px solid red; */
        overflow: auto;
        .movie{
        /* border: 1px solid green; */
        text-align: center;

            .movie-details{
                text-align: left;
                background-color: beige;
                figure{
                    margin:0;
                    
                    img{
                        border-radius: 10px;
                    }
                }
                figcaption{
                    font-family: Poppins, sans-serif;
                    font-size: 12px;
                    padding: 5px;
                    div{
                        padding: 3px;
                    }
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