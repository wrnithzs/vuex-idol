<template>
  <div id="app">
    <div v-for="(person) in people" :key="person.id" class="card border-info mb-3 w-75 " style="max-width: 100%">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="https://www.hellokpop.com/wp-content/uploads/2020/01/IMG_20200117_170409-660x400.jpg" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body text-info">
            <h5 class="card-title">{{person.name}}</h5>
            <p class="card-text">birthday : {{person.birthday}}</p>
            <p class="card-text">memberOf : {{person.group}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      people: []
    }
  },
  methods: {
    ...mapActions({
      loadPeople: 'loadPeople'
    })
  },
  async mounted () {
    this.people = await this.loadPeople()
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
