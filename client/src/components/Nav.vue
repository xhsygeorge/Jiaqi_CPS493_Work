<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LoginBadge from './LoginBadge.vue';

let isActive = ref(false);
</script>

<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="0" height="28">
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/myactivity">My Activity</router-link>
        <router-link class="navbar-item" to="/statistics">Statistics</router-link>
        <router-link class="navbar-item" to="/friendsactivity">Friends activity</router-link>
        <router-link class="navbar-item" to="/peoplesearch">People Search</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Admin</a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/user">User</router-link>
          </div>
        </div>
      </div>
    </div>
    
    <div class="navbar-end">
      <div class="navbar-item">
        <login-badge></login-badge>
      </div>
    </div>
  </nav>
</template>

<style>
    .router-link-active {
        border-bottom: #00AA00 5px solid;
    }
</style>