<script setup lang="ts">
import { reactive, ref } from "vue";
import { RouterLink } from 'vue-router';
import { getProducts } from "../stores/products";

</script>
<template>
  <div>
    <div class="control">
      <input class="input" type="text" placeholder="Search" v-model="search" />
    </div>
    <div class="products">
      <RouterLink class="product" v-for="product in products" :key="products.id" to="`/product/${product.id}`">
        <div class="product-image">
          <img src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p>{{product.description}}</p>
          <p>{{product.picture}}</p>
          <p>
            <span class="currency">$</span>
            <span class="amount">{{ product.price }}</span>
          </p>
        </div>
      </RouterLink>

    </div>
  </div>
</template>



<style scoped>
.products{
  display: flex;
  flex-wrap: wrap;
}
.product{
  flex-basis: 10em;
  margin: 1em;
  padding: 1em;
  border: 1em solid #000;
  border-radius: 5em;
  background-color: #fff;
}
.product-info{
  display: flex;
  align-items: flex-start;

}
.price{

}
</style>