<template>
  <button class="mdiChevronTripleDown"></button>
</template>

<script>
import { defineComponent } from "vue";
import { mdiChevronTripleDown } from "@mdi/js";

export default defineComponent({
  name: "mdiChevronTripleDown",
});
</script>

<style>
.mdiChevronTripleDown {
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}
</style>
