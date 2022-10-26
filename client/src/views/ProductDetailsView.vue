<script lang="ts">
import { reactive } from 'vue';
import { getProducts } from "../stores/products";
import { RouterLink } from 'vue-router';
import { ref } from "vue";

const route = useRoute();
route.param.id

const product = ref(getProducts(+route.params.id));
</script>

<template>
    <div>
        <div v-if="products" class="section">
            <div class="product-image">
                <img src="product.thumbnail" alt="product.title" />
            </div>
            <div class="product-info">
                <h3 class="title">{{ product.title}}</h3>
                <span class="currency">$</span>
                <span class="amount">{{ product.price}}</span>
            </div>
        </div>
    </div>
</template>



<style scoped>
  .products{
    display: flex;
    flex-wrap: wrap;
  },
  .product{
    flex-basis: 10em;
    margin: 1em;
    padding: 1em;
    border: 1em solid #000;
    border-radius: 5em;
    background-color: #fff;
  },
  .product-info{
    display: flex;
    align-items: flex-start;

  }
  .price{

  }
</style>