<template>
    <div class="main">
        <header class="header">
            <div class="header-part1">
                <figure>
                    <img src="../assets/rtlogo.9b892cff3fd.png" alt="Rotten Tomatoes" width="161px" height="50px">
                </figure>
                <input class="ri-search-line" type="text" placeholder="Search movies, TV, actors, more...">
            </div>
            <div class=" header-part2">
                <div class="nav">
                    <a href="https://www.rottentomatoes.com/about#whatisthetomatometer">What's the Tomatometer<i class="fa-regular fa-registered"></i>?</a>
                    <h5>Critics</h5>
                    <h5>LOGIN/SIGNUP</h5>
                </div>
                <ul class="nav">
                    <li>MOVIES</li>
                    <li>TV SHOWS</li>
                    <li>SHOP</li>
                    <li>NEWS</li>
                    <li>SHOWTIMES</li>
                </ul>
            </div>
            
        </header>
    </div>
</template>

<script>
    export default {
        name:'Header'
    }
</script>

<style scoped>
.main{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins, sans-serif;
}
header{
    background-color: #FA320A;
    display: flex;
    flex-direction: row;
}
div{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.header-part1 input{
    background-color: #961E06;
    border: 1px solid white;
    border-radius: 30px;
    width:25rem;
    height:1.5rem;
    outline: none;
    padding:5px;
    caret-color: white;
}
::placeholder{
        color: white;
        font-size: 12px;
        font-family: Poppins, sans-serif;

}
.header-part2{
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: bold;
    font-size: 14px;
    text-align: left;
    .nav{
        margin: 0 5px 0 0;
        display: flex;
        flex-direction: row;
        list-style: none;
        align-items: left;
        gap: 20px;
        a, a:hover, a:visited {
        text-decoration: none;
        color: white;
        }
        a:active{
            text-decoration: underline;
        } 
        h4{
            cursor: pointers;
        }
        li{
            font-size: 14px;
            padding: 10px;
            border-radius: 10px 10px 0 0;
        }
        li:hover{
            background-color: white;
            color:black;
            cursor: pointer;
        }
    }
}
</style>