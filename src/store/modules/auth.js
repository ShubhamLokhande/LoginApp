import axios from 'axios'
import Platform from 'react-native'

const BASE_URL= ( Platform.OS === 'ios' ) ? 'http://localhost:8080/mobileTrainingREST'
                                          : 'http://192.168.31.13:8080/mobileTrainingREST'

export default {
  namespaced: true,
  state:{
    user:{},
    isAuth: false
  },
  getters:{

  },
  actions:{
    login({commit, state}, userData){
      return axios.post( `${BASE_URL}/user/login`, userData)
        .then(res => {
          if(res.data == ""){
            commit('setIsAuth', false)
            return state.isAuth
          }
          commit('setIsAuth', true)
          const user = res.data
          commit('setAuthUser', user)
          return state.user
        })
    }
  },
  mutations:{
    setAuthUser(state, user){
      return state.user = user
    },
    setIsAuth(state, isAuth){
      return state.isAuth = isAuth
    }
  }
}
