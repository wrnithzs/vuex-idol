import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
// import { storage } from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async loadEvent ({ commit }) {
      const eventlist = []
      const querySnapshot = await db.collection('events').get()
      querySnapshot.forEach(function (doc) {
        const event = {
          id: doc.id,
          idol: doc.data().idol,
          end: doc.data().end,
          start: doc.data().start,
          eventName: doc.data().eventName,
          location: doc.data().location
        }
        console.log(doc.id, ' => ', doc.data())
        eventlist.push(event)
      })
      return eventlist
    },
    async loadPeople ({ commit }) {
      const peoplelist = []
      const querySnapshot = await db.collection('people').get()
      querySnapshot.forEach(function (doc) {
        const person = {
          id: doc.id,
          name: doc.data().name,
          birthday: doc.data().birthday,
          group: doc.data().group
        }
        peoplelist.push(person)
      })
      return peoplelist
    },
    addEvent ({ commit }, event) {
      db.collection('events').add({
        idol: event.idol,
        end: event.end,
        start: event.start,
        eventName: event.eventName,
        location: event.location
      })
    },
    updateEvent ({ commit }, event) {
      db.collection('events').doc(event.id).set({
        idol: event.idol,
        end: event.end,
        start: event.start,
        eventName: event.eventName,
        location: event.location
      })
    }
  }
})
