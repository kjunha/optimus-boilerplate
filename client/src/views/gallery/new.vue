<template>
    <div class="wrapper card mb-5">
        <img v-if="url" class="card-img-top" v-bind:src="url" alt="preview">
        <div v-else class="preview text-center card-img-top">
            <p class="h5">이미지가 선택되지 않았습니다.</p>
        </div>
        <div class="card-body">
            <form class="text-left">
                <div class="form-group">
                    <label for="image">사진</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="image" ref="img" v-on:change="onFileChange()">
                        <label class="custom-file-label" for="inputGroupFile01">{{ path?path:'파일을 선택하세요' }}</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="artist">작가</label>
                    <input type="text" class="form-control" id="artist" v-model="artist">
                </div>
                <div class="form-group">
                    <label for="description">설명</label>
                    <textarea type="text" class="form-control" id="description" v-model="description" v-bind:maxlength="max_length"></textarea>
                    <small><span v-bind:class="description.length<max_length?'text-success':'text-danger'">{{ description.length }}</span> / {{ max_length }} byte</small>
                </div>
                <div class="text-center">
                    <a href="/gallery" class="btn btn-secondary mr-3">취소</a>
                    <button type="button" class="btn btn-primary" v-bind:disabled="!validate()" v-on:click="upload()">만들기</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => {
        return({
            url: '',
            path: '',
            artist: '',
            description: '',
            max_length:1500,
        })
    },
    methods: {
        onFileChange: function() {
            const file = this.$refs.img.files[0];
            if(file) {
                this.url = URL.createObjectURL(file);
                this.path = file.name;
            } else {
                this.url = '';
                this.path = '';
            }
        },
        upload: function() {
            let formData = new FormData();
            formData.append('image', this.$refs.img.files[0]);
            formData.append('artist', this.artist);
            formData.append('description', this.description);
            axios.post('http://localhost:3000/images/upload', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }).then(() => {
                this.url = '';
                this.path = '';
                this.artist = '';
                this.description = '';
                
            }).catch((err) => {console.error(err)})
        },
        validate: function() {
            return this.artist.length > 0 && this.url.length > 0;
        }
    }
}
</script>
<style>
    .wrapper{
        width: 50vw;
        margin: auto;
    }
    .preview {
        min-height: 500px;
        background-color: #555;
        color: #fff;
    }
    .preview p {
        margin-top: 230px;
    }
    .preview img {
        max-width: 48vw;
    }
    #description {
        height: 250px;
    }
    .btn {
        width:120px;
    }
</style>