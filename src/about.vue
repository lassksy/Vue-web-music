<template>
    <div class="about">
        <button @click="getWangyi">获取热门歌单</button>
    </div>
</template>

<script>
        import { axios } from "./plugins/axios";

    export default {
        methods: {
            getWangyi () {
                axios({
                    url: '/top/playlist/highquality?before=1503639064232&limit=3',
                    method: 'post'
                })
                .then(res => {
                    console.log("我拿到的数据" , res.data.tags)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }

</script>