<template>
    <div class="header">
            <input type="search"  class="search-text" placeholder="搜索">
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4rem;
        background-color: aliceblue;
        margin-bottom: -20px !important;
    } 
    
    .search-text {
        border-radius: 10px;
        height: 2rem;
        width: 80%;

    }

</style>