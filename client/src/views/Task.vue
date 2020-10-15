<template>
  <div class="about">
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
            <th>ID</th>
            <th>Contents</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in contents" v-bind:key="index">
            <th>{{ item.task_id }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.created_at }}</td>
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
      newTask: '',
      contents: [],
    }
  },
  methods: {
    submitTask: function () {
      const body = {
        task: this.newTask
      }
      axios.post('http://localhost:3000/tasks/new', body).then((res) => {
        console.log(JSON.stringify(res));
        alert('등록되었습니다');
      }).catch((err) => { console.error(err) })
    }
  },
  created() {
    axios.get('http://localhost:3000/tasks').then((res) => {
      this.contents = res.data;
    }).catch((err) => { console.error(err) })
  }
}
</script>
