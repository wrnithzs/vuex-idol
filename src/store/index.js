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
          eventName: doc.data().eventName,
          location: doc.data().location,
          start: doc.data().start
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
    }
  }
})
