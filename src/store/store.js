import Vuex from 'vuex'
import Vue from 'vue'
import cart from './modules/cart.js'
import products from './modules/products.js'


Vue.use(Vuex)

export default  new Vuex.Store({
// al definir modulos, estos pasan directamente al estado global, por ende para acceder a la props dentro de ellos es necesario concatenar la prop al nombre del modulo.
  modules: {
    cart,
    products
  },
  
  
  state: { // data, igual a la que se encuntra en componentes
    
  },
  

  mutations: { // son responsables de actualizar el estado, se mapean en methods, pero es preferible mapear una accion, que llame a un a mutacion para alterar el estado
   
  },


  //actions ----------------------------------------------------------------
  
  actions: {// metodos, estos se mapean en methods dentro de los componentes

    },


// -----------------------------  getters ------------------------------------|
  getters: { //propiedades computadas, siempre pasar todos los getters como parametro

    
   
  }
})

