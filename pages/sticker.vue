<template>
  <div>
    <main class="page">
      <h1>Sticker Page</h1>
      <p>
        Scroll down — page has filler blocks so you can see the sticker fixed on
        the right.
      </p>

      <section class="section__container ">
        <div  v-for="n in 12" :key="n" class="section__container__item">
          <h3 class="section__container__item--title">Block {{ n }}</h3>
          <p class="section__container__item--desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            veritatis.
          </p>
          <p v-if="n % 3 === 0" class="section__container__item--desc">
            Extra content to make the page longer. Repeat lines. Lorem ipsum…
          </p>
        </div>
      </section>
    </main>

    <Sticker />
  </div>
</template>

<script setup lang="ts">
import Sticker from '~/components/Sticker.vue'
</script>
