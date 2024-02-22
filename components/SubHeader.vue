<template>
   <el-row>
        <a style="color: yellow">TRENDING ON RT</a>
        <a>Play Movie Trivia</a>
        <a>Madame Web</a>
        <a>Dune: Part Two</a>
        <a>TV Premiere Dates</a>
    </el-row>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.el-row{
    background-color: #707070;
    width: 100%;
    height: 25px;
}
    a{
        font-size: 13px;
        color: white;
        font-family:Poppins, sans-serif ;
        cursor: pointer;
        margin-right: 5px;
        text-align: center;
    }
    a:active{
        text-decoration: underline;
    }
  
</style>