import shop from '@/api/shop.js'
export default {
  state: {
    products: []
  },

  mutations: {
    setProducts(state, products){
      state.products = products
    },
    discountInventoryProduct(state,product){
      product.inventory --
    },
    addQuantityProduct(state, cartItem){
      cartItem.quantity ++
    },
  },

  actions: {
    fetchProducts({ commit }){
      shop.getProducts(products =>{
            commit('setProducts', products)
             
          })
        },
  },

  getters: {
    productsCount(state){
      return state.products.length
    },
    availableProducts(state){
      return state.products.filter(product => product.inventory > 0)
    },
    productsInStock(){
      return (product) => {
        return  product.inventory > 0
      }
    }
  }
}