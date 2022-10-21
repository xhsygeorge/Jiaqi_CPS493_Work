<script setup lang="ts">
import session, { login, logout } from "../stores/session";
import { reactive, computed} from 'vue';


</script>
<template>
  <main>
    <h1 class="title">My Activity</h1>
    <!--Add workout button-->
    <button class="button is-info">Add Workout</button>
    <form>
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Add a workout</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label for="name" class="label">Title</label>
                        <input type="text" class="input" id="name">
                    </div>
                    <div class="field">
                        <label for="date" class="label">Date</label>
                        <input type="date" class="input" id="date">
                    </div>
                </section>
                <footer>
                    <button class="button is-success">Save</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </form>
    <!--Show my workout-->
    
  </main>
</template>
