<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <!--login dropdown button-->
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Login</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <a class="button is-light" @click="login('Moshe', 'Plotkin')">
                        Moshe Plotkin
                    </a>
                    <a class="button is-light" @click="login('Jiaqi', 'Chen')">
                        Jiaqi Chen
                    </a>
                    
                </div>
            </div>
        </div>
        
    </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>
</template>
<style scoped>
</style>
