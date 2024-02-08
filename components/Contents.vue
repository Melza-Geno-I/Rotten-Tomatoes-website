<template>
    <div class="content">
        <section class="section1">
            <div class="heading">
                <h4>NEW & UPCOMING MOVIES IN THEATERS</h4>
                <a href="">VIEW ALL</a>
            </div>
            <ul class="movies">
                <li class="movie">
                    <p class="movie-rating">50%</p>
                    <p class="movie-name">Friends</p>
                </li>
                <button><i class="ri-add-circle-line"></i>WATCHLIST</button>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.content{
    font-family: Roboto Condensed, sans-serif;
}
.heading{
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
</style>