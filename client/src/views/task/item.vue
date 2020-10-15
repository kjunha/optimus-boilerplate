<template>
    <div class="task-item">
        <h1> Task Detail View </h1>
        <div class="d-flex justify-content-center m-5">
            <table class="table table-bordered">
                <tbody>
                    <tr v-for="(item, key, index) in contents" v-bind:key="index">
                        <th class="tb-index">{{ key }}</th>
                        <td>{{ item }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <router-link class="btn btn-primary" to="/tasks">go back</router-link>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    props: ['task_id'],
    data: () => {
        return {
            baseUrl: 'http://localhost:3000/tasks',
            contents: {}
        }
    },
    created() {
        axios.get(`${this.baseUrl}/${this.task_id}`).then((res) => {
            this.contents = res.data[0];
        })
    }
}
</script>

<style>
.tb-index {
    background-color: #ddd;
}
</style>