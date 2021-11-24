import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {products:[], cart:[], toggle:false},
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, items) =>{
      state.products = items
    },
    SET_CART:(state, product)=>{
      if (state.cart.length){
        let productExist = false;
        state.cart.map((item)=>{
          if(item.article === product.article){
            productExist = true;
            item.quantity++
          }
        })
        if(!productExist){
          state.cart.unshift(product)
        }
      }else{
        state.cart.unshift(product)
      }
    },
    REMOVE:(state, index)=>{
      state.cart.splice(index, 1)
      console.log(index)
    },

    TOGGLE_CART:(state)=>{
      state.toggle = !state.toggle
    }

  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}){
      return axios('https://rafaelnassybullin.github.io/DataRepo/cartVueProject.json', {method:"GET"})
      .then((items)=>{

        commit('SET_PRODUCTS_TO_STATE', items.data.products)
        console.log(items.data.products);
        return items
      }).catch(err=>{
        console.log(err)
        return err
      })
    },
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index){
      commit('REMOVE', index)
    },

    TOGGLE_C:({commit})=>{
      commit('TOGGLE_CART')
    }

  },
  getters:{

    TOGGLE(state){
      return state.toggle
    },

    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart
    }
  },
  modules: {
  }
})
