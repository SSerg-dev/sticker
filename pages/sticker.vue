<template>
  <div>
    <main class="page">
      <h1>Sticker Page</h1>
      <p>Scroll down — page has filler blocks so you can see the sticker fixed on the right.</p>

      <section v-for="n in 12" :key="n" style="margin:24px 0; padding:16px; background:#fafafa; border:1px solid #eee;">
        <h3>Block {{ n }}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, veritatis.</p>
        <p v-if="n % 3 === 0">Extra content to make the page longer. Repeat lines. Lorem ipsum…</p>
      </section>
    </main>

    <Sticker />
  </div>
</template>

<script setup lang="ts">
import Sticker from '~/components/Sticker.vue'
</script>