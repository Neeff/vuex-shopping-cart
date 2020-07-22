<template>
  <div id="app" class="container">
      <products></products>
      <shopping-cart></shopping-cart> 
    
  </div>
</template>

<script>
import Products from './components/Products.vue'
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  name: 'app',
  components: {
    Products,
    ShoppingCart
  }
}
</script>
