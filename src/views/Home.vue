<template>
  <div class="home">
    <div v-for="(event) in events" :key="event.id" class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-header">{{event.eventName}}</div>
      <div class="card-body text-success">
        <h5 class="card-title">ศิลปิน : {{event.idol}}</h5>
        <p class="card-text">เริ่มวันที่ : {{event.start}}</p>
        <p class="card-text">วันสุดท้าย : {{event.end}}</p>
        <p class="card-text">สถานที่ : {{event.location}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      events: []
    }
  },
  methods: {
    ...mapActions({
      loadEvent: 'loadEvent'
    })
  },
  async mounted () {
    this.events = await this.loadEvent()
    console.log(this.events)
  }
}
</script>
<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
</style>
