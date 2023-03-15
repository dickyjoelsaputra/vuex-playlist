import { createStore } from 'vuex'

export default createStore({
  // strict: true,
  state: {
    products: [
      { name: 'banana', price: 15 },
      { name: 'apple', price: 20 },
      { name: 'mango', price: 25 },
      { name: 'watermelon', price: 40 },
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '***',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      // setTimeout(function () {
      state.products.forEach(product => {
        product.name += payload
        product.price -= 1
      })
      // })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  },
  modules: {
    
  }
})

