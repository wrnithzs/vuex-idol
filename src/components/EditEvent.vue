<template>
<div id="app"><br/>
 <h1>Event Form</h1><br />
  <form @submit.prevent="save()">
    <div class="form-group">
      <label>Event Name</label>
      <input v-model="event.eventName" class="form-control" placeholder="event name" />
    </div>
    <div class="form-group">
      <label>Artist</label>
      <input v-model="event.idol" class="form-control" placeholder="ชื่อศิลปิน" />
    </div>
     <div class="form-row">
    <div class="form-group col-md-6">
      <label>StartDate</label>
      <input v-model="event.start" class="form-control" placeholder="วันเริ่มต้น (12/01/20)"/>
    </div>
    <div class="form-group col-md-6">
      <label>EndDate</label>
      <input v-model="event.end" class="form-control" placeholder="วันสิ้นสุด (12/02/20)"/>
    </div>
     </div>
    <div class="form-group">
      <label>Location</label>
      <input v-model="event.location" class="form-control" placeholder="สถานที่(mrt station)"/>
    </div>
    <div class="row">
    <button type="submit" class="btn btn-primary" @click="save">Submit</button>&nbsp;&nbsp;
    <router-link :to="{ name: 'Home' }" class="btn btn-warning">Cancle</router-link>
    </div>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      editevent: {
        idol: '',
        eventName: '',
        start: '',
        end: '',
        location: ''
      }
    }
  },
  mounted () {
    const eventID = this.$route.params.id
    console.log(eventID)
  },
  methods: {
    ...mapActions({
      updateEvent: 'updatEvent'
    }),
    save () {
      this.updateEvent(this.event)
    }
  }
}
</script>

<style>

</style>
