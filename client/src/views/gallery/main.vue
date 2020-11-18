<template>
    <div class="mx-5">
        <div class="d-flex justify-content-between">
            <a href="/gallery/new" class="btn btn-primary">작품 등록</a>
        </div>
        <hr/>
        <div class="d-flex mx-3">
            <div class="card g-item mr-3"
                v-for="(item, index) in contents" v-bind:key="index">
                <img class="card-img-top" 
                    v-bind:src="item.source_url" v-bind:alt="`item-${index}`">
                <div class="card-body">
                    <ul>
                        <li>artist: {{item.artist}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => {
        return {
            baseUrl: 'http://localhost:3000/images',
            contents: [],
        }
    },
    methods: {
        upload: function() {
            let formData = new FormData();
            console.log(this.$refs.img.files[0]?true:false);
            formData.append('foo', this.$refs.img.files[0]);
            axios.post('http://localhost:3000/images/upload', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }).catch((err) => { console.error(err) })
        }
    },
    created() {
        axios.get(`${this.baseUrl}`).then((res) => {
            this.contents = res.data;
            console.log(JSON.stringify(this.contents));
        }).catch((err) => {console.error(err)});
    }
}
</script>
<style>
    .btn{
        width: 120px;
    }
    .g-item{
        width: 500px;
    }
</style>