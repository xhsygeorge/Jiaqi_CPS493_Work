<script setup lang="ts">
import type users from "@/data/users";
import User from "../stores/session";
</script>
<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="#">My Exercise</a></li>
            <li><a href="#">Admin</a></li>
            <li class="is-active">
                <a href="#" aria-current="page">
                    Users
                </a>
            </li>
        </ul>
    </nav>
    <button class="button is-private">Add User</button>
    
        

</template>
