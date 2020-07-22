<template>
<div class="row">
    <div class="alert alert-success block" role="alert" v-if="cart.checkOutStatus === 'success' " >
        payment processed with succefully  🎉
    </div>
    <div class="alert alert-danger block" role="alert" v-else-if="cart.checkOutStatus === 'fail'" >
        payment processed error try again  😕
    </div>
    
  <div class="col col-md-12 ">
    <div class="card border-primary mb-3">
  <div class="card-header">shopping cart</div>
  <div class="card-body text-primary">
    <h5 class="card-title">list of products</h5>
      <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item of cartProducts" :key="item.id">
      {{ item.title }}
      <span class="badge badge-success"> {{item.price}}</span>
    <span class="badge badge-primary badge-pill">{{ item.quantity }}</span>
  </li>
  
</ul>
<h3><span class="badge badge-warning">Total: {{cartTotal}}</span></h3>
<button class="btn btn-success btn-block" @click="checkOut">Checkout</button>
  </div>
  </div>
</div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'ShoppingCart',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartProducts', 'cartTotal'])
  },

  methods: {
    ...mapActions(['checkOut'])
  }

}
</script>
