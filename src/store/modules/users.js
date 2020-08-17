import axios from 'axios'
import Platform from 'react-native'

const BASE_URL= ( Platform.OS === 'ios' ) ? 'http://localhost:8080/mobileTrainingREST'
                                          : 'http://192.168.31.13:8080/mobileTrainingREST'

export default {
  namespaced: true,

  state:{
    items: [],
    item: {},
    loggedUser:{}
  },
  getters:{

  },
  actions:{
    registerUser({commit, state}, userDTO){
      return axios.post(`${BASE_URL}/user/save`, userDTO)
        .then(res => {
          if(res.data == ''){
            return false
          }
          const user = res.data
          commit('setLoggedUser', user)
          return true
        })
        .catch(error => {
          alert('Something goes wrong')
        })
    }
  },
  mutations:{
    setLoggedUser(state, loggedUser){
      return state.loggedUser = loggedUser
    }
  }
}