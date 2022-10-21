<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LoginBadge from './LoginBadge.vue';
let isActive = ref(false);
</script>
<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" height="28">
        </a>
        <div :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      
      <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>

          <router-link class="navbar-item" to="/activity">
            My Activity
          </router-link>

          <router-link class="navbar-item" to="/statistics">
            Statistics
          </router-link>

          <router-link class="navbar-item" to="/friends-activity">
            Friends activity
          </router-link>

          <router-link class="navbar-item" to="/people-search">
            People Search
          </router-link>
          <router-link class="navbar-item" to="/user">
            User
          </router-link>
            
        </div>
      </div>
    
      <div class="navbar-end">
        <div class="navbar-item">
          <login-badge></login-badge>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
    .router-link-active {
        
        border-bottom: #00AA00 5px solid;
    }
</style>