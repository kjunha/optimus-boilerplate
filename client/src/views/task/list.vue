<template>
  <div class="task-list">
    <h2>Register Your Task</h2>
    <div class="search d-flex justify-content-center">
      <form class="form-inline" v-on:submit="submitTask()">
        <input class="form-control mr-sm-2" id="contents" type="text" placeholder="Your Task" aria-label="Search" v-model="newTask"/>
        <button class="btn btn-primary btn-rounded my-0" type="submit">Register</button>
      </form>
    </div>
    <div class="result d-flex justify-content-center">
      <table class="table table-striped mx-5 my-5">
        <thead>
          <tr>
            <th>No</th>
            <th>PK</th>
            <th>Contents</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in contents" v-bind:key="index">
            <th>{{ index + 1 }}</th>
            <td><a v-bind:href="`/tasks/${item.task_id}`">{{ item.task_id }}</a></td>
            <td>{{ item.title }}</td>
            <td>{{ item.created_at }}</td>
            <td><button class="btn btn-danger btn-rounded btn-sm" v-on:click="deleteTask(item.task_id)">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Task',
  data: () => {
    return {
      baseUrl: 'http://localhost:3000/tasks',
      newTask: '',
      contents: [],
    }
  },
  methods: {
    submitTask: function () {
      if(this.newTask.length == 0) {
        alert('내용을 입력해 주세요');
        return;
      }
      const body = {
        task: this.newTask
      }
      axios.post(`${this.baseUrl}/new`, body).then(() => {
        alert('등록되었습니다');
      }).catch((err) => { console.error(err) });
    },
    deleteTask: function(id) {
      axios.delete(`${this.baseUrl}/${id}`).then(() => {
        alert('삭제되었습니다');
        location.reload();
      }).catch((err) => { console.error(err) });
    }
  },
  created() {
    axios.get(`${this.baseUrl}`).then((res) => {
      this.contents = res.data;
    }).catch((err) => { console.error(err) });
  }
}
</script>
