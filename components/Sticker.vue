<template>
  <div class="sticker-wrap" @mouseenter="onEnter" @mouseleave="onLeave">
    <div :class="['sticker', { expanded: isExpanded }]" @click="toggle">
      <div class="sticker__mini" role="region" :aria-expanded="isExpanded">
        <div class="sticker__header">
          <img :src="urls[0]" alt="cat" width="36" height="36" style="border-radius:8px; object-fit:cover" />
          <div class="sticker__title">Cat sticker</div>
        </div>

        <div class="sticker__gallery">
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; gap:8px;">
              <img v-for="(u, idx) in urls" :key="idx" :src="u" class="sticker__thumb" :alt="`cat ${idx+1}`" />
            </div>
            <div style="font-size:12px; opacity:0.8;">Hover to expand. Click to toggle.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isExpanded = ref(false)
const { urls } = useCats()

function onEnter() { isExpanded.value = true }
function onLeave() { isExpanded.value = false }
function toggle() { isExpanded.value = !isExpanded.value }
</script>

<style scoped lang="scss">
// scoped minimal override (global SCSS lives in assets)
</style>