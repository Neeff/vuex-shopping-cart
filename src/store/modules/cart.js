//esto es un modulo en vuex, solo exporta un objeto con el estado, mutacines, getters y acciones
import shop from '@/api/shop.js'
export default {


  state: {
    cart: [],
    checkOutStatus: null

  },

  mutations: {
    pushProductInCart(state, product){
      state.cart.push({id: product.id, quantity: 1})
    },
    setCheckOutStatus(state, status){
      state.checkOutStatus = status

    },
    emptyCart(state){
      state.cart = []
    }

  },

  actions: {
    addProductToCart({ state, commit }, product){
      if(product.inventory > 0){
        const cartItem = state.cart.find(item => item.id === product.id)
        if(!cartItem){
          commit('pushProductInCart', product)
          commit('discountInventoryProduct', product)

        }else{
          commit('discountInventoryProduct', product)
          commit('addQuantityProduct',cartItem)

        }
      }

    },
    checkOut({ state, commit }){
      shop.buyProducts(
          state.cart, () => {
          commit('emptyCart')
          commit('setCheckOutStatus', 'success')
        },
        () => {
          commit('setCheckOutStatus', 'fail')
        }
      )

    }

  },

  getters: {
    cartProducts(state, getters, rootState){
      return state.cart.map(cartItem => {
        const product = rootState.products.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
          
        }
      })
    },
    cartTotal(state,getters ){
      let total = 0
      getters.cartProducts.forEach(product  => {
        total += product.price * product.quantity

        
      });
      return total 
    },

  }
}