<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="item of products.products" :key="item.id">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{ item.title }}</a>
                </h4>
                <h5>{{ item.price }}</h5><span class="badge badge-success">{{ item.inventory }}</span>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <button class="btn btn-success btn-block" @click="addProductToCart(item)" :disabled="!productsInStock(item)" >add to cart</button>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

    </div>
  </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'


export default {
  name: 'Products',
  data: () => {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['productsCount', 'availableProducts', 'productsInStock'])
    //productos en stock es un getter ubicado en state, lo que hace es que devulve una funcion a la cual se le pasa un parametro esta funcion devolvera solo los productos que tienen stock mayor o igual 0
  },
  methods: {
    ...mapActions(['fetchProducts', 'addProductToCart'])
  },

  created(){
    this.loading = true
   this.fetchProducts().then(() => this.loading = false)
  }

  }

</script>
